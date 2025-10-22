document.addEventListener('DOMContentLoaded', function() {
    // --- CONFIGURACIÓN INICIAL ---
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');
    const sectionsData = [
        { id: 'evaluacion', title: '1. Dependencia Operativa', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>` },
        { id: 'vocacion', title: '2. Vocación Puestos Clave', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>` },
        { id: 'prioridades', title: '3. Prioridades de Mejora', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` },
        { id: 'mision', title: '4. Misión de Puesto', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>` },
        { id: 'delegacion', title: '5. Delegación Efectiva', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h.01M12 7h.01M16 7h.01M9 17h6M9 14h6M9 11h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>` },
        { id: 'feedback', title: '6. Feedback Ágil', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>` },
        { id: 'roleplay', title: '7. Role-Play', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` },
        { id: 'plan', title: '8. Mi Plan de Implementación', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>` },
        { id: 'resumen', title: '9. Resumen Ejecutivo', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>` },
    ];

// --- CÓDIGO A REEMPLAZAR EN app.js ---

// --- GENERACIÓN DINÁMICA DE CONTENIDO ---
sectionsData.forEach(data => {
    // Crear link de navegación
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="#${data.id}" class="nav-link flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors duration-300">
            <span class="completion-icon text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            ${data.icon}
            <span class="flex-grow">${data.title}</span>
        </a>`;
    navMenu.appendChild(li);

    // Crear contenedor de sección
    const section = document.createElement('section');
    section.id = data.id;
    //-- MODIFICADO: Añadimos la clase 'avoid-break' a cada sección principal
    section.className = 'avoid-break section-content bg-white shadow-xl rounded-2xl p-8 mb-8';
    mainContent.appendChild(section);
});
    
    // --- INYECTAR CONTENIDO HTML EN SECCIONES ---
    const instructionsBoxClass = "bg-blue-50 border-l-4 border-brand-blue p-4 mb-8 rounded-r-lg";

    document.getElementById('evaluacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[0].icon} ${sectionsData[0].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Identificar la dependencia del equipo del líder en decisiones, procesos clave e incidentes imprevistos.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Marca con una "X" la casilla que mejor represente tu situación actual en la escala, siendo 1 "Nunca" y 5 "Siempre". Sé honesto contigo mismo, este diagnóstico es para tu beneficio.</p>
        </div>
        <div class="overflow-x-auto"><table class="w-full text-left">
            <thead class="bg-gray-50"><tr><th class="p-4 font-bold">Afirmación</th><th class="p-4 text-center font-bold">1<br>(Nunca)</th><th class="p-4 text-center font-bold">2<br>(Rara vez)</th><th class="p-4 text-center font-bold">3<br>(A veces)</th><th class="p-4 text-center font-bold">4<br>(Frecuentemente)</th><th class="p-4 text-center font-bold">5<br>(Siempre)</th></tr></thead>
            <tbody></tbody>
        </table></div>
        <div class="mt-6 text-right"><button id="calculate-score" class="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">Calcular Puntaje</button></div>
        <div id="score-result" class="mt-6 p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg" style="display: none;"><h4 class="font-bold text-lg brand-blue">Resultado del Diagnóstico</h4><p id="score-text" class="text-gray-700"></p></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión Final</h3><p class="text-gray-600 mt-2">Según mi diagnóstico, el mayor 'cuello de botella' en mi operación hoy es...</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="evaluacion" data-id="evaluacion_reflexion" placeholder="Ej: La autorización final de cotizaciones, ya que todas deben pasar por mí, retrasando la respuesta al cliente."></textarea></div>`;

    document.getElementById('vocacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[1].icon} ${sectionsData[1].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
             <p><strong>Objetivo del ejercicio:</strong> Ayudar al líder a diagnosticar si sus colaboradores clave están operando desde un enfoque en la ejecución de tareas o desde un enfoque de propiedad sobre los resultados. El fin es identificar la brecha entre el desempeño actual y el impacto estratégico esperado.</p>
             <p class="mt-2"><strong>Instrucción:</strong> Describe las funciones principales de 2 de tus puestos clave y cuál crees que es la mejor forma de delegar esta función para responsabilizarlos. Piensa en un colaborador clave y analiza sus acciones y decisiones recientes para diagnosticar su enfoque predominante.</p>
        </div>
        <div id="puestos-clave-container" class="space-y-8"></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Actividad Adicional</h3>
        <div class="mt-4"><label class="block font-semibold text-gray-700">Mi Problema Más Recurrente:</label><p class="text-sm text-gray-500 mb-2">De la lista anterior, identifica el enfoque de "Seguidor de Instrucciones/ Falta Ownership" que sea el más problemático para los resultados de tus colaboradores clave.</p><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_problema_recurrente" placeholder="Mi equipo espera instrucciones detalladas en lugar de proponer soluciones."></textarea></div>
        <div class="mt-4"><label class="block font-semibold text-gray-700">¿Cómo crees que este comportamiento impacta negativamente los resultados de tu PYME?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_impacto_negativo" placeholder="Retrasa los proyectos, genera retrabajos y aumenta mi carga operativa."></textarea></div>
        <div class="mt-4"><label class="block font-semibold text-gray-700">Del enfoque que identificaste en tu operación, ¿qué te impide resolverlo hoy?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_impedimento" placeholder="Falta de tiempo para capacitar y el temor a que cometan errores costosos."></textarea></div>
        </div>`;
    
    //-- MODIFICADO: Añadimos el contenedor grid para las dos columnas que generará el script más abajo.
    document.getElementById('prioridades').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[2].icon} ${sectionsData[2].title.substring(3)}</h2>
            <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Comprender cómo el colaborador puede resolver de manera satisfactoria y autónoma un problema con sentido de ownership.</p>
            <p class="mt-2"><strong>Instrucción:</strong> De tus 2 colaboradores clave, identifica un problema o situación desafiante que haya enfrentado en el último año en relación con las funciones de su puesto, y que desde tu perspectiva no haya tenido una solución óptima por parte del colaborador.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            </div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión</h3><p class="text-gray-600 mt-2">¿Qué harías diferente como líder para transformar una función de ejecución mecánica en uno orientado al resultado?</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="prioridades" data-id="prioridades_reflexion" placeholder="En lugar de solo asignar la tarea, explicaría el 'para qué' y el impacto que tiene en el cliente. Luego, establecería métricas de éxito claras."></textarea></div>`;
    
    // CÓDIGO A REEMPLAZAR EN app.js

    document.getElementById('mision').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[3].icon} ${sectionsData[3].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Documentar por escrito la nueva definición para un puesto clave que sea clara, potente e inspiradora, como base para guiar al colaborador y líder en qué significa Lograr Ownership/Dominar el puesto.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Adoptaremos las funciones identificadas en la "Definición Vocación Puestos Clave" para construir esta ficha.</p>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-2xl font-bold text-brand-blue mb-4">Ficha de Rol Estratégico - Puesto Clave 1</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Nombre del Rol:</label><input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" data-section="mision" data-id="mision_p1_nombre_rol" placeholder="Ej: Gerente de Operaciones"></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Responsabilidades Clave (El Territorio):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-40" data-section="mision" data-id="mision_p1_responsabilidades" placeholder="1. Gestión de inventarios.&#10;2. Supervisión de logística y entregas.&#10;3. Optimización de procesos internos."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Misión del Rol (Objetivo Principal - El QUÉ y PARA QUÉ):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" data-section="mision" data-id="mision_p1_mision_rol" placeholder="Ej: Asegurar la entrega de proyectos al cliente dentro del plazo y presupuesto acordados, manteniendo un nivel de satisfacción superior al 90%."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Prioridades de Éxito del puesto:</label><p class="text-sm text-gray-500 mb-2">¿Cómo se mide qué se está logrando la vocación del puesto? Deben ser sencillos de rastrear.</p><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" placeholder="1. Cumplir meta de ventas&#10;2. Inventario actualizado y sin fallos&#10;3. Sucursal limpia y ordenada" data-section="mision" data-id="mision_p1_prioridades_exito"></textarea></div>
                <div><label class="block font-semibold text-gray-700">Plazo de Revisión:</label><div class="mt-2 space-y-2">
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p1" class="autosave-input" value="Semanal" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2">Semanal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p1" class="autosave-input" value="Quincenal" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2">Quincenal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p1" class="autosave-input" value="Mensual" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2">Mensual</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p1" class="autosave-input" value="Trimestral" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2">Trimestral</span></label>
                </div></div>
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-2xl font-bold text-brand-blue mb-4">Ficha de Rol Estratégico - Puesto Clave 2</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Nombre del Rol:</label><input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" data-section="mision" data-id="mision_p2_nombre_rol" placeholder="Ej: Líder de Proyectos"></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Responsabilidades Clave (El Territorio):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-40" data-section="mision" data-id="mision_p2_responsabilidades" placeholder="1. Planificación de proyectos.&#10;2. Asignación de tareas al equipo.&#10;3. Comunicación con stakeholders."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Misión del Rol (Objetivo Principal - El QUÉ y PARA QUÉ):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" data-section="mision" data-id="mision_p2_mision_rol" placeholder="Ej: Garantizar que los proyectos se completen a tiempo, dentro del presupuesto y cumplan con los estándares de calidad."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Prioridades de Éxito del puesto:</label><p class="text-sm text-gray-500 mb-2">¿Cómo se mide qué se está logrando la vocación del puesto? Deben ser sencillos de rastrear.</p><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" placeholder="1. 95% de proyectos entregados a tiempo.&#10;2. Satisfacción del cliente > 8/10.&#10;3. Presupuesto del proyecto sin desviaciones > 5%. " data-section="mision" data-id="mision_p2_prioridades_exito"></textarea></div>
                <div><label class="block font-semibold text-gray-700">Plazo de Revisión:</label><div class="mt-2 space-y-2">
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Semanal" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Semanal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Quincenal" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Quincenal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Mensual" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Mensual</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Trimestral" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Trimestral</span></label>
                </div></div>
            </div>
        </div>
        
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión Adicional</h3>
            <div class="mt-4"><label class="block font-semibold text-gray-700">¿Qué recursos o capacitaciones crees que necesita la persona en este rol para cumplir exitosamente con su Misión y Responsabilidades Clave?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="mision" data-id="mision_recursos_necesarios" placeholder="Necesita un curso avanzado de Excel para análisis de datos y acceso a un software de gestión de inventarios."></textarea></div>
            <div class="mt-4"><label class="block font-semibold text-gray-700">¿Qué cambio observarías en tu relación con tu equipo si cada delegación incluyera propósito, claridad y seguimiento?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="mision" data-id="mision_cambio_observado" placeholder="El equipo sería más proactivo, habría menos errores por falta de comunicación y yo podría enfocarme más en la estrategia."></textarea></div>
        </div>`;
    
    document.getElementById('delegacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[4].icon} ${sectionsData[4].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Realizar un diagnóstico rápido de cuánto aplicas como líder las buenas prácticas de delegación.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Selecciona las últimas 3 tareas o proyectos importantes que delegaste a tu colaborador clave y evalúa si aplicaste cada una de las 7 buenas prácticas de delegación.</p>
        </div>
        <div class="overflow-x-auto"><table class="w-full text-left" id="delegacion-table">
            <thead><tr class="bg-gray-50">
                <th class="p-4 font-bold">Buena Práctica de Delegación</th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 1" data-section="delegacion" data-id="delegacion_tarea1_nombre"></th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 2" data-section="delegacion" data-id="delegacion_tarea2_nombre"></th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 3" data-section="delegacion" data-id="delegacion_tarea3_nombre"></th>
                <th class="p-4 text-center font-bold bg-blue-100 text-brand-blue">Promedio</th>
            </tr></thead>
            <tbody></tbody>
            <tfoot><tr class="bg-gray-100 font-bold">
                <td class="p-4">Total</td>
                <td class="p-4 text-center" id="total-tarea1">0/7</td>
                <td class="p-4 text-center" id="total-tarea2">0/7</td>
                <td class="p-4 text-center" id="total-tarea3">0/7</td>
                <td class="p-4 text-center bg-blue-100 text-brand-blue" id="total-promedio">0/7</td>
            </tr></tfoot>
        </table></div>
        
        <div class="mt-8">
            <details class="bg-gray-50 rounded-lg border border-gray-200">
                <summary class="p-4 font-semibold text-brand-blue cursor-pointer flex items-center justify-between">
                    <span>Ver Buenas Prácticas de Delegación</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div class="p-4 border-t border-gray-200">
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Vincular siempre al objetivo de puesto</li>
                        <li>Formalizar en una breve sesión de coordinación</li>
                        <li>Diferencia entre Orientación a la Tarea y Orientación al Objetivo</li>
                        <li>Diferenciar tareas recurrentes y excepciones</li>
                        <li>Asignar fecha y hora de entrega</li>
                        <li>Respaldar siempre por escrito</li>
                        <li>Preguntas de control para consolidar el compromiso</li>
                    </ul>
                </div>
            </details>
        </div>
        
        <div class="mt-8">
            <h3 class="text-2xl font-bold text-gray-800">Conclusiones</h3>
            <div class="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700">
                <ol class="list-decimal list-inside space-y-2">
                    <li>¿Tus áreas de oportunidad (calificaciones bajas) podrían relacionarse con algún problema recurrente en tu operación?</li>
                    <li>¿Crees que sea relevante que como líder también abordes tus áreas de oportunidad?</li>
                    <li>¿Cuál de estas áreas de oportunidad te parece prioritario abordar primero?</li>
                </ol>
            </div>
            <textarea class="autosave-input w-full mt-4 p-3 border border-gray-300 rounded-lg h-32" data-section="delegacion" data-id="delegacion_observaciones" placeholder="Escribe aquí tus reflexiones basadas en las preguntas anteriores..."></textarea>
        </div>`;
    
    document.getElementById('feedback').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[5].icon} ${sectionsData[5].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Implementar un sistema para mejorar los resultados y Ownership de los colaboradores en su Rol, midiendo el progreso hacia los objetivos de manera objetiva y ágil.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Partiendo del Rol Mejorado, prepara la sesión de retroalimentación de resultados con este formato, recordando el Objetivo del Puesto, dando una evaluación final, una autoevaluación de referencia, retroalimentación y definiendo acuerdos para mejorar.</p>
        </div>
        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400"><h3 class="text-2xl font-bold text-yellow-800 mb-4">Retroalimentación Semáforo</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input type="text" class="autosave-input p-2 border rounded" placeholder="Nombre del colaborador" data-section="feedback" data-id="feedback_nombre">
                <input type="date" class="autosave-input p-2 border rounded" data-section="feedback" data-id="feedback_fecha">
                <input type="text" class="autosave-input p-2 border rounded" placeholder="Rol / puesto" data-section="feedback" data-id="feedback_rol">
            </div>
            <div class="mb-6"><label class="block font-semibold mb-1">Objetivo de Puesto a Evaluar:</label><textarea class="autosave-input w-full p-2 border rounded" data-section="feedback" data-id="feedback_objetivo" placeholder="Ej: Reducir el tiempo de respuesta a tickets de soporte en un 20%."></textarea></div>
            <div class="mb-6"><label class="block font-semibold mb-1">Prioridades del puesto:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-32" data-section="feedback" data-id="feedback_prioridades" placeholder="1. Atender tickets de alta prioridad.&#10;2. Documentar soluciones en la base de conocimiento.&#10;3. Escalar problemas complejos al equipo de desarrollo."></textarea></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div><h4 class="font-bold text-lg mb-2">1. Autoevaluación del Colaborador</h4><div class="space-y-3" id="semaforo-colaborador"></div></div>
                <div><h4 class="font-bold text-lg mb-2">2. Evaluación Definitiva del Líder</h4><div class="space-y-3" id="semaforo-lider"></div></div>
            </div>
            <div class="mb-6"><h4 class="font-bold text-lg mb-2">3. Retroalimentación</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label class="font-semibold">Colaborador:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-40" placeholder="Lo que salió bien...&#10;Lo que debo mejorar...&#10;Qué me hizo falta..." data-section="feedback" data-id="feedback_retro_colaborador"></textarea></div>
                <div><label class="font-semibold">Líder:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-40" placeholder="Aciertos y Aportaciones...&#10;Cómo impacta el desempeño...&#10;Áreas de oportunidad..." data-section="feedback" data-id="feedback_retro_lider"></textarea></div>
            </div></div>
            <div>
            <h4 class="font-bold text-lg mb-2">4. Plan de Acción Acordado</h4>
            <table class="w-full text-left">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="p-2">Acción Específica</th>
                        <th class="p-2">Responsable</th>
                        <th class="p-2">Fecha Límite</th>
                        <th class="p-2">Fecha de Próxima Sesión</th>
                    </tr>
                </thead>
                <tbody>
                    ${Array.from({ length: 10 }, (_, i) => `
                        <tr>
                            <td><input type="text" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_accion${i + 1}_desc" placeholder="Acción específica..."></td>
                            <td><input type="text" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_accion${i + 1}_resp" placeholder="Responsable..."></td>
                            <td><input type="date" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_accion${i + 1}_fecha"></td>
                            <td><input type="date" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_accion${i + 1}_proxima_sesion"></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;

    document.getElementById('roleplay').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[6].icon} ${sectionsData[6].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Permitir la práctica del ciclo dinámico de delegación y feedback en un entorno seguro, y afinar las habilidades para conducir entrevistas de seguimiento.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Si estás en el rol de "Observador" durante los ejercicios de role-play, utiliza esta tabla para tomar notas estructuradas. Tu feedback es crucial para el aprendizaje de tus compañeros.</p>
        </div>
        <div class="mb-6"><h4 class="font-bold text-lg">Escenario de Role-Play:</h4><div class="flex space-x-4 mt-2">
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_rigidez"> Rigidez en la lista de tareas</label>
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_imprevistas"> Delegación de tareas imprevistas</label>
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_semaforo"> Feedback con semáforo</label>
        </div></div>
        <div class="overflow-x-auto"><table class="w-full text-left">
            <thead><tr class="bg-gray-50"><th class="p-4 font-bold">Aspectos Clave a Observar</th><th class="p-4 font-bold">Aciertos / Fortalezas del Líder</th><th class="p-4 font-bold">Oportunidades de Mejora / Recomendaciones</th></tr></thead>
            <tbody id="roleplay-table-body"></tbody>
        </table></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Mi Aprendizaje del Role-Play</h3><p class="text-gray-600 mt-2">¿Qué idea o estrategia te llevas de esta práctica que aplicarás en tu PYME?</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="roleplay" data-id="roleplay_aprendizaje" placeholder="Me di cuenta que tiendo a dar la solución en lugar de guiar con preguntas. Practicaré el hacer preguntas de control para asegurar el entendimiento."></textarea></div>`;

    document.getElementById('plan').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[7].icon} ${sectionsData[7].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Traducir el aprendizaje en planes de acción concretos y comprometidos para tus Puestos Clave.</p>
            <p class="mt-2"><strong>Indicaciones:</strong> Define una acción prioritaria para cada Puesto Clave identificado en la sección 2. Sé específico y realista.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
                <h3 class="text-xl font-bold text-brand-blue border-b pb-2">Plan para: <span id="plan_puesto1_titulo" class="text-brand-orange">Puesto Clave 1</span></h3>
                <div>
                    <label class="block font-semibold text-gray-700">Acción Prioritaria #1 (¿Qué haré?)</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md h-24" data-section="plan" data-id="plan_accion_prioritaria_p1" placeholder="Redefinir la Misión del Puesto con el colaborador y establecer 2 indicadores de éxito."></textarea>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">¿Para Cuándo?</label>
                    <input type="datetime-local" class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_fecha_limite_p1">
                </div>
                <div class="bg-red-50 p-4 rounded-md">
                    <label class="block font-semibold text-gray-700">Posible Obstáculo</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_obstaculo_p1" placeholder="La carga de trabajo diaria que nos impide tener una reunión enfocada."></textarea>
                </div>
                <div class="bg-green-50 p-4 rounded-md">
                    <label class="block font-semibold text-gray-700">¿Cómo lo Superaré?</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_estrategia_p1" placeholder="Agendar la reunión a primera hora del día y bloquear 90 minutos en el calendario."></textarea>
                </div>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
                <h3 class="text-xl font-bold text-brand-blue border-b pb-2">Plan para: <span id="plan_puesto2_titulo" class="text-brand-orange">Puesto Clave 2</span></h3>
                <div>
                    <label class="block font-semibold text-gray-700">Acción Prioritaria #2 (¿Qué haré?)</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md h-24" data-section="plan" data-id="plan_accion_prioritaria_p2" placeholder="Implementar una sesión de feedback semanal de 15 minutos usando el formato 'Semáforo'."></textarea>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">¿Para Cuándo?</label>
                    <input type="datetime-local" class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_fecha_limite_p2">
                </div>
                <div class="bg-red-50 p-4 rounded-md">
                    <label class="block font-semibold text-gray-700">Posible Obstáculo</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_obstaculo_p2" placeholder="La posible resistencia del colaborador a un nuevo proceso de evaluación."></textarea>
                </div>
                <div class="bg-green-50 p-4 rounded-md">
                    <label class="block font-semibold text-gray-700">¿Cómo lo Superaré?</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border rounded-md" data-section="plan" data-id="plan_estrategia_p2" placeholder="Explicar el beneficio para su desarrollo profesional y empezar la primera sesión con un enfoque en los aciertos."></textarea>
                </div>
            </div>
        </div>`;
    
    document.getElementById('resumen').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[8].icon} ${sectionsData[8].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Consolidar en un solo lugar los diagnósticos y planes de acción más importantes que has definido a lo largo de este cuaderno de trabajo.</p>
            <p class="mt-2"><strong>Dashboard de Liderazgo:</strong> Este es tu plan de acción personal. Se actualiza automáticamente a medida que completas las otras secciones.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 class="font-bold text-lg text-brand-blue">Mayor Cuello de Botella</h3>
                <p class="text-xs text-gray-500 mb-3">Fuente: Sec. 1 - Dependencia Operativa</p>
                <p id="summary_cuello_botella" class="text-gray-700 font-serif italic bg-white p-3 rounded h-24">---</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 class="font-bold text-lg text-brand-blue">Problema Más Recurrente</h3>
                <p class="text-xs text-gray-500 mb-3">Fuente: Sec. 2 - Vocación Puestos Clave</p>
                <p id="summary_problema_recurrente" class="text-gray-700 font-serif italic bg-white p-3 rounded h-24">---</p>
            </div>
            
            <div class="md:col-span-2 bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
                <h3 class="font-bold text-xl text-brand-blue">Plan de Acción para: <span id="summary_puesto1_titulo" class="text-brand-orange">Puesto Clave 1</span></h3>
                <p class="text-xs text-gray-500 mb-3">Fuente: Sec. 8 - Mi Plan de Implementación</p>
                <div id="summary_accion_prioritaria_p1" class="text-gray-800 font-serif text-lg italic bg-white p-4 rounded mb-4">---</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p class="text-gray-700 bg-white p-3 rounded"><strong class="font-semibold">Fecha Límite:</strong> <span id="summary_fecha_limite_p1">---</span></p>
                    <p class="text-gray-700 bg-white p-3 rounded"><strong class="font-semibold">Obstáculo:</strong> <span id="summary_obstaculo_p1">---</span></p>
                </div>
            </div>

             <div class="md:col-span-2 bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
                <h3 class="font-bold text-xl text-brand-blue">Plan de Acción para: <span id="summary_puesto2_titulo" class="text-brand-orange">Puesto Clave 2</span></h3>
                <p class="text-xs text-gray-500 mb-3">Fuente: Sec. 8 - Mi Plan de Implementación</p>
                <div id="summary_accion_prioritaria_p2" class="text-gray-800 font-serif text-lg italic bg-white p-4 rounded mb-4">---</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p class="text-gray-700 bg-white p-3 rounded"><strong class="font-semibold">Fecha Límite:</strong> <span id="summary_fecha_limite_p2">---</span></p>
                    <p class="text-gray-700 bg-white p-3 rounded"><strong class="font-semibold">Obstáculo:</strong> <span id="summary_obstaculo_p2">---</span></p>
                </div>
            </div>
        </div>`;


    // --- LÓGICA DE NAVEGACIÓN Y ESTADO ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');

    function showSection(hash) {
        sections.forEach(section => {
            section.classList.toggle('active', '#' + section.id === hash);
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
        
        if (hash === '#resumen') {
            populateExecutiveSummary();
        }
        if (hash === '#plan') {
            updatePlanTitles();
        }
    }

    navMenu.addEventListener('click', function(e) {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            history.pushState(null, null, targetId);
            showSection(targetId);
            window.scrollTo(0, 0);
        }
    });

    // --- LÓGICA DE COMPLETITUD Y PROGRESO ---
    function checkCompletion() {
        let completedSections = 0;
        const sectionsToCheck = sectionsData.filter(s => s.id !== 'resumen');

        sectionsToCheck.forEach(data => {
            const sectionInputs = document.querySelectorAll(`.autosave-input[data-section="${data.id}"]`);
            let isComplete = false;
            if (sectionInputs.length > 0) {
                isComplete = Array.from(sectionInputs).some(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') return input.checked;
                    return input.value.trim() !== '';
                });
            }
            
            const navLink = document.querySelector(`.nav-link[href="#${data.id}"]`);
            const icon = navLink.querySelector('.completion-icon');
            if (isComplete) {
                completedSections++;
                icon.classList.remove('text-gray-400');
                icon.classList.add('text-green-500');
            } else {
                icon.classList.add('text-gray-400');
                icon.classList.remove('text-green-500');
            }
        });
        const progress = (completedSections / sectionsToCheck.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    // --- AUTOSAVE ---
    function loadSavedData() {
        const allInputs = document.querySelectorAll('.autosave-input');
        allInputs.forEach(input => {
            const savedValue = localStorage.getItem('cuaderno_' + input.dataset.id);
            if (savedValue) {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    if (input.value === savedValue || (input.type === 'checkbox' && savedValue === 'true')) {
                        input.checked = true;
                    }
                } else {
                    input.value = savedValue;
                }
            }
        });
        updateDelegacionTotals();
        checkCompletion();
        populateExecutiveSummary();
        updatePlanTitles();
    }

    mainContent.addEventListener('input', function(e) {
            if (e.target.classList.contains('autosave-input')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            localStorage.setItem('cuaderno_' + input.dataset.id, valueToSave);
            if(input.closest('#delegacion-table')) {
                updateDelegacionTotals();
            }
            if (input.dataset.section === 'vocacion') {
                updatePlanTitles();
            }
            checkCompletion();
            populateExecutiveSummary();
            }
    });
        mainContent.addEventListener('change', function(e) {
            if (e.target.classList.contains('autosave-input') && (e.target.type === 'radio' || e.target.type === 'checkbox' || e.target.tagName === 'SELECT')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            localStorage.setItem('cuaderno_' + input.dataset.id, valueToSave);
            if(input.closest('#delegacion-table')) {
                updateDelegacionTotals();
            }
            checkCompletion();
            }
    });
    
    function populateExecutiveSummary() {
        const placeholder = 'No definido aún.';

        const dataMap = {
            'summary_cuello_botella': 'cuaderno_evaluacion_reflexion',
            'summary_problema_recurrente': 'cuaderno_vocacion_problema_recurrente',
            // Plan 1
            'summary_puesto1_titulo': 'cuaderno_vocacion_p1_titulo',
            'summary_accion_prioritaria_p1': 'cuaderno_plan_accion_prioritaria_p1',
            'summary_fecha_limite_p1': 'cuaderno_plan_fecha_limite_p1',
            'summary_obstaculo_p1': 'cuaderno_plan_obstaculo_p1',
            // Plan 2
            'summary_puesto2_titulo': 'cuaderno_vocacion_p2_titulo',
            'summary_accion_prioritaria_p2': 'cuaderno_plan_accion_prioritaria_p2',
            'summary_fecha_limite_p2': 'cuaderno_plan_fecha_limite_p2',
            'summary_obstaculo_p2': 'cuaderno_plan_obstaculo_p2',

        };

        for (const [elementId, storageKey] of Object.entries(dataMap)) {
            const element = document.getElementById(elementId);
            if (element) {
                let value = localStorage.getItem(storageKey);
                if ((storageKey === 'cuaderno_plan_fecha_limite_p1' || storageKey === 'cuaderno_plan_fecha_limite_p2') && value) {
                    try {
                        const date = new Date(value);
                        value = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) + ' a las ' + date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
                    } catch(e) { }
                }
                element.textContent = (value && value.trim() !== '') ? value : placeholder;
            }
        }
    }


    // --- LÓGICA ESPECIALIZADA POR SECCIÓN ---

    function updatePlanTitles() {
        const placeholderP1 = 'Puesto Clave 1';
        const placeholderP2 = 'Puesto Clave 2';
        
        const tituloP1 = localStorage.getItem('cuaderno_vocacion_p1_titulo') || placeholderP1;
        const tituloP2 = localStorage.getItem('cuaderno_vocacion_p2_titulo') || placeholderP2;
        
        const spanP1 = document.getElementById('plan_puesto1_titulo');
        const spanP2 = document.getElementById('plan_puesto2_titulo');

        if(spanP1) spanP1.textContent = (tituloP1.trim() !== '') ? tituloP1 : placeholderP1;
        if(spanP2) spanP2.textContent = (tituloP2.trim() !== '') ? tituloP2 : placeholderP2;
    }


    // Sección 1: Dependencia operativa
    const questions = [
        "Las decisiones importantes se detienen si no estoy yo para aprobarlas.", "Mi equipo me consulta cómo resolver problemas que podrían solucionar ellos mismos.", "Siento que tengo que microgestionar las tareas para asegurar que se hagan correctamente.", "Dedico la mayor parte de mi tiempo a \"apagar incendios\" operativos inesperados.", "Los proyectos o iniciativas importantes se retrasan si no estoy directamente involucrado.", "Mi equipo tiene dificultades para tomar iniciativa sin una instrucción explícita.", "Me siento abrumado(a) por la cantidad de tareas operativas diarias que solo yo puedo resolver."
    ];
    const tableBody = document.querySelector('#evaluacion tbody');
    questions.forEach((q, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        let cells = `<td class="p-4">${q}</td>`;
        for (let i = 1; i <= 5; i++) {
            cells += `<td class="p-4 text-center"><input type="radio" name="q${index}" value="${i}" class="autosave-input h-5 w-5 text-brand-blue focus:ring-brand-orange" data-section="evaluacion" data-id="evaluacion_q${index}"></td>`;
        }
        row.innerHTML = cells;
        tableBody.appendChild(row);
    });
    document.getElementById('calculate-score').addEventListener('click', function() {
        let totalScore = 0, questionsAnswered = 0;
        for (let i = 0; i < questions.length; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                totalScore += parseInt(selected.value);
                questionsAnswered++;
            }
        }
        const scoreResultDiv = document.getElementById('score-result'), scoreText = document.getElementById('score-text');
        if (questionsAnswered < questions.length) {
            scoreText.textContent = 'Por favor, responde todas las preguntas para calcular tu puntaje.';
            scoreResultDiv.style.display = 'block';
            return;
        }
        let resultText = `Tu puntaje es ${totalScore}. `;
        if (totalScore <= 14) resultText += "Nivel de Dependencia Bajo: ¡Excelente! Tu equipo opera con un alto grado de autonomía.";
        else if (totalScore <= 25) resultText += "Nivel de Dependencia Moderado: Hay un buen equilibrio, pero existen áreas donde el equipo aún depende de ti.";
        else resultText += "Nivel de Dependencia Alto: Eres un cuello de botella significativo para tu operación. Es crucial que empieces a delegar.";
        scoreText.textContent = resultText;
        scoreResultDiv.style.display = 'block';
    });

// --- CÓDIGO A REEMPLAZAR EN app.js ---

// Sección 2: Vocación Puestos Clave
const puestosContainer = document.getElementById('puestos-clave-container');
for (let i = 1; i <= 2; i++) {
    const puestoDiv = document.createElement('div');
    //-- MODIFICADO: Añadimos la clase 'avoid-break' aquí
    puestoDiv.className = 'avoid-break bg-gray-50 p-6 rounded-lg';
    puestoDiv.innerHTML = `<h3 class="text-xl font-bold text-gray-800 mb-4">Puesto Clave ${i}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Título del puesto" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_titulo">
            <input type="text" placeholder="Antigüedad de Creación" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_antiguedad_creacion">
            <input type="number" placeholder="Personas que han ocupado el puesto (Histórico)" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_num_personas">
            <input type="text" placeholder="Antigüedad persona actual" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_antiguedad_actual">
        </div>
        <div class="mt-4"><label class="block font-semibold">Funciones Principales</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-24" data-section="vocacion" data-id="vocacion_p${i}_funciones" placeholder="1. Supervisar equipo de ventas.&#10;2. Realizar reportes semanales.&#10;3. Atender clientes clave."></textarea></div>
        <div class="mt-4"><label class="block font-semibold">Enfoque en el Objetivo (El "Para Qué")</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-24" data-section="vocacion" data-id="vocacion_p${i}_enfoque" placeholder="Asegurar que el equipo alcance la meta de ventas mensual para garantizar la rentabilidad del área."></textarea></div>`;
    puestosContainer.appendChild(puestoDiv);
}

    // Sección 3: Prioridades de Mejora
    const prioridadesContainer = document.querySelector('#prioridades .grid');
    //-- CÓDIGO RESTAURADO: Este loop genera las dos columnas para la sección 3.
    for (let i = 1; i <= 2; i++) {
        const div = document.createElement('div');
        div.className = 'bg-gray-50 p-6 rounded-lg';
        div.innerHTML = `<h3 class="text-xl font-bold text-gray-800 mb-4">Análisis para Puesto Clave ${i}</h3>
            <div class="space-y-4">
            <div><label class="block font-semibold text-gray-700">La Situación Inicial:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_situacion" placeholder="Un cliente importante se quejó por un retraso en la entrega."></textarea></div>
            <div><label class="block font-semibold text-gray-700">Comportamiento / Decisión:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_comportamiento" placeholder="El colaborador me reenvió el correo del cliente sin proponer una solución."></textarea></div>
            <div><label class="block font-semibold text-gray-700">El Resultado:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_resultado" placeholder="Tuve que intervenir, contactar al cliente y resolver el problema yo mismo."></textarea></div>
            <div><label class="block font-semibold text-gray-700">El Ownership (Abordaje idóneo):</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_ownership" placeholder="Analizar la causa del retraso, contactar al cliente con una disculpa y una nueva fecha, y luego informarme con un plan."></textarea></div>
            </div>`;
        prioridadesContainer.appendChild(div);
    }
    
    // Sección 5: Delegación Efectiva
    const delegacionTableBody = document.querySelector('#delegacion-table tbody');
    const delegacionPreguntas = ["¿Vinculaste la tarea con Misión del puesto?", "¿Sugeriste que se repasara el objetivo?", "¿Aclaraste si era tarea recurrente?", "¿Estableciste FECHA y HORA exactas?", "¿Hubo respaldo ESCRITO?", "¿Confirmaste si tenía recursos?", "¿Preguntaste cómo podías ayudar?"];
    delegacionPreguntas.forEach((pregunta, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        let cells = `<td class="p-4">${pregunta}</td>`;
        for (let i = 1; i <= 3; i++) {
            cells += `<td class="p-4 text-center"><select class="autosave-input p-2 border rounded delegacion-select" data-tarea="${i}" data-section="delegacion" data-id="delegacion_t${i}_p${index}"><option value="--">--</option><option value="1">Sí</option><option value="0">No</option></select></td>`;
        }
        cells += `<td class="p-4 text-center font-bold bg-blue-50" id="promedio-p${index}">0%</td>`;
        row.innerHTML = cells;
        delegacionTableBody.appendChild(row);
    });

    function updateDelegacionTotals() {
        for (let i = 1; i <= 3; i++) {
            let total = 0;
            document.querySelectorAll(`.delegacion-select[data-tarea="${i}"]`).forEach(s => {
                if(s.value !== '--') total += parseInt(s.value)
            });
            document.getElementById(`total-tarea${i}`).textContent = `${total}/7`;
        }
        updateDelegacionAverages(); 
    }

    function updateDelegacionAverages() {
        let totalSum = 0;
        
        delegacionPreguntas.forEach((pregunta, index) => {
            let rowSum = 0;
            let answeredCount = 0;
            for (let i = 1; i <= 3; i++) {
                const select = document.querySelector(`select[data-id="delegacion_t${i}_p${index}"]`);
                if (select.value !== '--') {
                    rowSum += parseInt(select.value);
                    answeredCount++;
                }
            }
            const average = answeredCount > 0 ? (rowSum / answeredCount) * 100 : 0;
            document.getElementById(`promedio-p${index}`).textContent = `${average.toFixed(0)}%`;
        });

        for (let i = 1; i <= 3; i++) {
            const totalText = document.getElementById(`total-tarea${i}`).textContent;
            totalSum += parseInt(totalText.split('/')[0]);
        }

        const averageTotal = totalSum / 3;
        document.getElementById('total-promedio').textContent = `${averageTotal.toFixed(1)}/7`;
    }

    // Sección 6: Feedback Semáforo (Visual)
    const semaforoOptions = [
        { color: 'Verde', text: 'Cumplí el objetivo con excelencia.', ring: 'ring-green-500', bg: 'bg-green-100', text_color: 'text-green-800' },
        { color: 'Azul', text: 'Buen desempeño, con mejora menor.', ring: 'ring-blue-500', bg: 'bg-blue-100', text_color: 'text-blue-800' },
        { color: 'Amarillo', text: 'Resultado regular, requiere ajustes.', ring: 'ring-yellow-500', bg: 'bg-yellow-100', text_color: 'text-yellow-800' },
        { color: 'Rojo', text: 'Insuficiente, demanda intervención.', ring: 'ring-red-500', bg: 'bg-red-100', text_color: 'text-red-800' }
    ];
    const semaforoColaboradorDiv = document.getElementById('semaforo-colaborador');
    const semaforoLiderDiv = document.getElementById('semaforo-lider');
    semaforoOptions.forEach(opt => {
        const optionHTML = `
            <div>
                <input type="radio" name="semaforo_colaborador" id="sc_${opt.color}" class="autosave-input semaforo-radio sr-only" value="${opt.color}" data-section="feedback" data-id="feedback_semaforo_colaborador">
                <label for="sc_${opt.color}" style="--tw-ring-color: ${opt.ring.replace('ring-','')}" class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${opt.bg} ${opt.text_color}">
                    <span class="font-bold">${opt.color}:</span><span class="ml-2">${opt.text}</span>
                </label>
            </div>`;
        if (semaforoColaboradorDiv) semaforoColaboradorDiv.innerHTML += optionHTML;
        const optionHTML_lider = `
                <div>
                <input type="radio" name="semaforo_lider" id="sl_${opt.color}" class="autosave-input semaforo-radio sr-only" value="${opt.color}" data-section="feedback" data-id="feedback_semaforo_lider">
                <label for="sl_${opt.color}" style="--tw-ring-color: ${opt.ring.replace('ring-','')}" class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${opt.bg} ${opt.text_color}">
                    <span class="font-bold">${opt.color}:</span><span class="ml-2">${opt.text}</span>
                </label>
            </div>`;
        if (semaforoLiderDiv) semaforoLiderDiv.innerHTML += optionHTML_lider;
    });
    
    // Sección 7: Role-Play
    const roleplayTableBody = document.getElementById('roleplay-table-body');
    const roleplayAspectos = [`Claridad del Objetivo/Misión`, `Tipo de Preguntas`, `Manejo del Semáforo / Feedback`, `Acuerdo de Acciones`, `Comunicación No Verbal`];
    roleplayAspectos.forEach((aspecto, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        row.innerHTML = `<td class="p-4">${aspecto}</td>
            <td class="p-2"><textarea class="autosave-input w-full p-2 border rounded" data-section="roleplay" data-id="roleplay_a${index}_aciertos" placeholder="Aciertos observados..."></textarea></td>
            <td class="p-2"><textarea class="autosave-input w-full p-2 border rounded" data-section="roleplay" data-id="roleplay_a${index}_mejoras" placeholder="Oportunidades de mejora..."></textarea></td>`;
        if (roleplayTableBody) roleplayTableBody.appendChild(row);
    });

    // --- EXPORTAR A PDF ---
    document.getElementById('export-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const content = document.getElementById('main-content');
        const loadingIndicator = document.getElementById('loading');
        loadingIndicator.style.display = 'block';
        
        const currentHash = window.location.hash || `#${sectionsData[0].id}`;
        sections.forEach(s => s.classList.add('active')); 
        
        html2canvas(content, { scale: 2, useCORS: true }).then(canvas => {
            showSection(currentHash); 
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
            const pdfImageHeight = pdfWidth / ratio;
            let heightLeft = pdfImageHeight;
            let position = 0;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfImageHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
            while (heightLeft > 0) {
                position = heightLeft - pdfImageHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfImageHeight);
                heightLeft -= pdf.internal.pageSize.getHeight();
            }
            const participantName = localStorage.getItem('cuaderno_nombre_participante') || 'participante';
            pdf.save(`Cuaderno_MiEmpresaCrece_${participantName}.pdf`);
            loadingIndicator.style.display = 'none';
        }).catch(err => {
            console.error("Error al generar el PDF:", err);
            loadingIndicator.style.display = 'none';
            showSection(currentHash);
        });
    });

    // --- INICIALIZACIÓN FINAL ---
    const initialHash = window.location.hash || `#${sectionsData[0].id}`;
    if (document.querySelector(initialHash)) {
        showSection(initialHash);
    } else {
        showSection(`#${sectionsData[0].id}`);
    }
    loadSavedData();
});