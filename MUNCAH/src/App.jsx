// MUNCAH 2026 - React + Tailwind (JavaScript - JSX)
// --------------------------------------------------
// Este archivo es un componente React (JavaScript) listo para usarse en un proyecto
// creado con Create React App o Vite. Usa Tailwind CSS y framer-motion para animaciones.
// Instrucciones rápidas:
// 1) Crea un proyecto React (Vite recomendado: `npm create vite@latest my-app --template react`).
// 2) Instala Tailwind CSS según la guía oficial y configura `tailwind.config.cjs`.
// 3) Instala framer-motion: `npm install framer-motion`.
// 4) Guarda este archivo como `App.jsx` y úsalo como componente principal.
// 5) Asegúrate de importar la fuente Poppins en tu index.html o en CSS.
import React from 'react'

import  { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [tab, setTab] = useState('home');

  const headerLogo = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
      <path d="M 256 50 A 140 140 0 0 1 396 190 L 256 350 L 116 190 A 140 140 0 0 1 256 50 Z" fill="#FF0000" />
      <path d="M 116 190 L 256 350 L 256 500 C 180 500 116 436 116 360 Z" fill="#000000" />
      <path d="M 116 190 L 256 350 L 246 355 L 106 195 Z" fill="#FFFFFF" opacity="0.3" />
      <path d="M 396 190 L 256 350 L 256 500 C 332 500 396 436 396 360 Z" fill="#FFD700" />
      <path d="M 396 190 L 256 350 L 266 355 L 406 195 Z" fill="#FFFFFF" opacity="0.3" />
    </svg>
  );

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'schedule', label: 'Horario' },
    { id: 'team', label: 'Nuestro Equipo' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-poppins bg-white text-black">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-6 shadow-[0_4px_20px_rgba(255,0,0,0.25)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 130, damping: 12 }}
            className="flex justify-center mb-4"
          >
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden p-3">
              {headerLogo}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center text-4xl font-extrabold tracking-widest"
          >
            MUNCAH 2026
          </motion.h1>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-gradient-to-br from-red-600 to-red-800 py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-4 font-semibold text-white">
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => setTab(item.id)}
                  className={`px-4 py-2 rounded-lg transition-transform duration-200 ${tab === item.id ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}

            {/* Dropdown (Comités) */}
            <li className="relative">
              <div className="inline-block">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-lg text-white font-semibold">
                  Comités
                </motion.button>
              </div>
              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg ring-1 ring-black/5">
                <button onClick={() => setTab('committee1')} className="w-full text-left px-4 py-2 hover:bg-gray-100">Consejo de Seguridad</button>
                <button onClick={() => setTab('committee2')} className="w-full text-left px-4 py-2 hover:bg-gray-100">ACNUR</button>
                <button onClick={() => setTab('committee3')} className="w-full text-left px-4 py-2 hover:bg-gray-100">OEA</button>
                <button onClick={() => setTab('committee4')} className="w-full text-left px-4 py-2 hover:bg-gray-100">ECOSOC</button>
                <button onClick={() => setTab('committee5')} className="w-full text-left px-4 py-2 hover:bg-gray-100">UN Women</button>
                <button onClick={() => setTab('committee6')} className="w-full text-left px-4 py-2 hover:bg-gray-100">DISEC</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-10 w-full flex-1">
        {/* Home */}
        {tab === 'home' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">Bienvenidos a MUNCAH 2026</h2>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Auspiciantes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <motion.div key={n} whileHover={{ scale: 1.06 }} className="h-36 bg-white border rounded-lg flex items-center justify-center shadow-md">
                    Auspiciante {n}
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Reglamento del Modelo</h3>
              <div className="p-6 bg-gray-50 rounded-xl shadow-xl border-l-8 border-red-600 space-y-4">
                <p>A continuación encontrarás el reglamento oficial del modelo:</p>

                <div className="bg-white p-4 rounded shadow-inner">
                  <h5 className="text-red-600 font-bold mb-3">Contenido del Handbook</h5>
                  <ul className="list-inside list-disc text-gray-700 space-y-2 text-sm">
                    <li><strong>Palabras de Bienvenida:</strong> Mensaje del Secretario General</li>
                    <li><strong>MUNCAH 2026:</strong> Comités y temas a debatir</li>
                    <li><strong>Descripción de Puestos:</strong> Presidencia, Delegados, Seguridad, Pagers, Staff y Prensa</li>
                    <li><strong>Protocolo:</strong> Vestimenta formal, lenguaje diplomático y código de conducta</li>
                    <li><strong>Preparación:</strong> Discurso de apertura y posición oficial</li>
                    <li><strong>Resoluciones:</strong> Cómo redactar proyectos y cláusulas</li>
                    <li><strong>Procedimiento de Votación:</strong> Mayoría simple y cualificada</li>
                    <li><strong>Vocabulario y Terminología:</strong> Mociones, puntos y términos clave</li>
                    <li><strong>Conferencia:</strong> Estructura del debate y desarrollo de sesiones</li>
                    <li><strong>Negociaciones y Diplomacia:</strong> Habilidades clave</li>
                    <li><strong>Investigación:</strong> Fuentes recomendadas de la ONU</li>
                    <li><strong>Premios:</strong> Mejor Delegado, Menciones de Honor y Mejor Posición Oficial</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-4 rounded border-l-4 border-red-600">
                  <h6 className="font-semibold mb-2">⚠️ Aspectos Importantes:</h6>
                  <ul className="list-inside list-disc text-gray-700 text-sm space-y-1">
                    <li>Vestimenta formal obligatoria</li>
                    <li>Uso de lenguaje diplomático en tercera persona</li>
                    <li>Sistema de amonestaciones: leves, graves y muy graves</li>
                    <li>Entrega de posición oficial antes del modelo</li>
                    <li>No uso de IA para redacción de resoluciones</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a href="#" className="inline-block mt-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-shadow shadow-lg">📥 Descargar Handbook Completo (PDF)</a>
                </div>
              </div>
            </section>
          </motion.section>
        )}

        {/* Schedule */}
        {tab === 'schedule' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">Horario</h2>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold">Cronograma de Actividades MUNCAH 2026</h3>
              <p className="mt-2">Aquí encontrarás el horario detallado de todas las actividades del modelo.</p>

              <div className="mt-6 bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-4 text-center font-bold text-lg">Jueves 05 de Febrero 2026</div>
                <div className="p-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b-2" >
                        <th className="text-left p-2 w-1/4 font-bold text-gray-800">Hora</th>
                        <th className="text-left p-2 font-bold text-gray-800">Actividad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['7:50-8:20', 'Llegada de delegados, registro y entrega de materiales - Ingreso Kindergarten'],
                        ['8:30-9:20', 'Ceremonia de Apertura - Onkel Karl'],
                        ['9:25-9:50', 'Coffee Break - Terraza Biblioteca'],
                        ['9:55-12:40', 'Primera sesión formal por comités - Edificio Biblioteca'],
                        ['12:45-13:30', 'Almuerzo - Cafetería Primaria'],
                        ['13:35-16:00', 'Segunda sesión formal por comités - Edificio Biblioteca'],
                        ['16:05-16:30', 'Coffee Break - Terraza Biblioteca'],
                        ['16:30-17:40', 'Tercera sesión formal por comités - Edificio Biblioteca'],
                        ['17:45', 'Salida de los Delegados'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-3 font-semibold text-red-600">{row[0]}</td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-4 text-center font-bold text-lg mt-4">Viernes 06 de Febrero 2026</div>
                <div className="p-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b-2">
                        <th className="text-left p-2 w-1/4 font-bold text-gray-800">Hora</th>
                        <th className="text-left p-2 font-bold text-gray-800">Actividad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['7:50-8:10', 'Llegada de delegados - Ingreso Kindergarten'],
                        ['8:15-10:10', 'Cuarta sesión formal por comités - Edificio Biblioteca'],
                        ['10:15-10:40', 'Coffee Break - Terraza Biblioteca'],
                        ['10:45-12:40', 'Quinta sesión formal por comités - Edificio Biblioteca'],
                        ['12:40-13:30', 'Almuerzo - Cafetería Primaria'],
                        ['13:35-15:40', 'Sexta sesión formal por comités - Edificio Biblioteca'],
                        ['15:45-16:15', 'Coffee break - Terraza Biblioteca'],
                        ['16:20-17:00', 'Séptima sesión formal por comités - Edificio Biblioteca'],
                        ['17:10-18:10', 'Ceremonia de clausura - Onkel Karl'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-3 font-semibold text-red-600">{row[0]}</td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-center p-6">
                  <a href="#" className="inline-block mt-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-shadow">📄 Descargar Cronograma PDF</a>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Team */}
        {tab === 'team' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">Nuestro Equipo</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Gabriel Berrezueta', role: 'Secretario General' },
                { name: 'José Cabezas', role: 'Co-Secretario' },
                { name: 'Adriana Orellana', role: 'Presidenta del Comité Académico' },
                { name: 'Isabella Jalón', role: 'Jefe de Prensa' },
                { name: 'Nombre Apellido', role: 'Jefe de Seguridad' },
                { name: 'Romina Fierro', role: 'Jefe de Pager' },
                { name: 'Carlos Vargas', role: 'Coordinador Académico' },
              ].map((member, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className="bg-white rounded-xl shadow-xl overflow-hidden border">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">Foto</div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-red-600 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">Descripción del cargo.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Committees: 1..6 */}
        {['committee1','committee2','committee3','committee4','committee5','committee6'].includes(tab) && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {tab === 'committee1' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">Consejo de Seguridad de las Naciones Unidas</h2>
                <p>El Consejo de Seguridad es el órgano principal de la ONU responsable del mantenimiento de la paz y seguridad internacionales. Compuesto por 15 miembros (5 permanentes con derecho a veto y 10 no permanentes), tiene autoridad para tomar decisiones vinculantes y autorizar el uso de la fuerza.</p>
              </>
            )}

            {tab === 'committee2' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">ACNUR - Alto Comisionado de las Naciones Unidas para los Refugiados</h2>
                <p>ACNUR es la agencia de la ONU encargada de proteger y asistir a refugiados, solicitantes de asilo y personas desplazadas. Creado en 1950, trabaja en más de 130 países garantizando el derecho a buscar asilo y proporcionando soluciones duraderas.</p>
              </>
            )}

            {tab === 'committee3' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">OEA - Organización de los Estados Americanos</h2>
                <p>La OEA es el organismo regional multilateral más antiguo del mundo (1948), agrupa a los 35 Estados de las Américas. Trabaja para fortalecer la democracia, promover los derechos humanos, la seguridad multidimensional y el desarrollo integral en el hemisferio.</p>
              </>
            )}

            {tab === 'committee4' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">ECOSOC - Consejo Económico y Social</h2>
                <p>ECOSOC es el órgano principal de coordinación del trabajo económico y social de la ONU. Compuesto por 54 miembros elegidos por períodos de tres años, supervisa las actividades económicas y sociales del sistema de las Naciones Unidas.</p>
              </>
            )}

            {tab === 'committee5' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">UN Women - Entidad de las Naciones Unidas para la Igualdad de Género</h2>
                <p>ONU Mujeres es la entidad de la ONU dedicada a promover la igualdad de género y el empoderamiento de las mujeres. Creada en 2010, trabaja para eliminar la discriminación contra las mujeres y lograr la igualdad entre mujeres y hombres a nivel global.</p>
              </>
            )}

            {tab === 'committee6' && (
              <>
                <h2 className="text-3xl font-bold border-b-4 border-red-600 pb-2">DISEC - Comité de Desarme y Seguridad Internacional</h2>
                <p>DISEC es la Primera Comisión de la Asamblea General de la ONU. Se encarga del desarme, desafíos a la seguridad mundial y amenazas a la paz. Aborda temas de armas nucleares, convencionales, químicas y biológicas, así como el uso pacífico del espacio ultraterrestre.</p>
              </>
            )}
          </motion.section>
        )}
      </main>

      <footer className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>© 2025 MUNCAH 2026 - Todos los derechos reservados</p>
          <p>Una iniciativa del CAH</p>
          <div className="mt-4 space-x-4">
            <a className="text-yellow-400 hover:text-red-500" href="https://www.instagram.com/colegioalemanhumboldt_ec" target="_blank" rel="noreferrer">Instagram CAH</a>
            <a className="text-yellow-400 hover:text-red-500" href="https://www.instagram.com/muncah2025" target="_blank" rel="noreferrer">Instagram MUNCAH</a>
            <a className="text-yellow-400 hover:text-red-500" href="mailto:muncah.info@gmail.com">Email MUNCAH</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
