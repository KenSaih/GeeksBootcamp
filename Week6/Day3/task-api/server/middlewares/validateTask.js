// Middleware pour valider la présence du champ 'title' dans req.body
const validateTask = (req, res, next) => {
  const { title } = req.body;
  if (!title?.trim()) {
    return res.status(400).json({ error: 'Le champ "title" est requis et ne doit pas être vide.' });
  }
  next();
};

export default validateTask;
