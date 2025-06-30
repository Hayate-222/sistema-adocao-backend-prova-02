const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) return res.sendStatus(401);
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
      });
}

function authorizeRole(role) {
      return (req, res, next) => {
            if (req.user.role !== role) {
                  return res.status(403).json({ message: 'Acesso negado' });
            }
            next();
      };
}

function selfAuthorize(role) {
      return (req, res, next) => {
            const requestedId = parseInt(req.params.id);
            const isOwner = requestedId === req.user.id;
            const isAdmin = req.user.role === role;

            if (!isOwner && !isAdmin) {
                  return res.status(403).json({ message: 'Acesso negado: ação não autorizada' });
            }

            next();
      };
}

module.exports = { authenticateToken, authorizeRole, selfAuthorize };
