const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
const usuarioRoutes = require('./routes/usuarios.routes');
const empresaRoutes = require('./routes/empresas.routes');
const puestoRoutes = require('./routes/puestos.routes');
const habilidadRoutes = require('./routes/habilidades.routes');
const aplicacionRoutes = require('./routes/aplicaciones.routes');
const mensajeRoutes = require('./routes/mensajes.routes');
const catalogosRoutes = require('./routes/catalogos.routes');

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/puestos', puestoRoutes);
app.use('/api/habilidades', habilidadRoutes);
app.use('/api/aplicaciones', aplicacionRoutes);
app.use('/api/mensajes', mensajeRoutes);
app.use('/api/catalogos', catalogosRoutes);

app.get('/', (req, res) => {
  res.send('API Bolsa de Empleo funcionando 🚀');
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos.');
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Error al conectar con la BD:', error);
  }
});
