const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function authenticateToken(req, res, next) {
      const authHeader = req.headers['authorization'];
      const token = authHeader?.split(' ')[1];

      if (!token) return res.status(401).json({ error: 'Token não fornecido' });

      jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ error: 'Token inválido' });
            req.user = user;
            next();
      });
}

function authorizeAdmin(req, res, next) {
      if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Acesso negado: apenas administradores' });
      }
      next();
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

module.exports = { authenticateToken, authorizeRole, selfAuthorize, authorizeAdmin };
