var buttons = [];
var slides = [];
var currentSlide = null;
var answers = new Map();
var controls = [];
var questions = [];
var feed = new Map();
feed.set('Alto', 'ALTO: Los resultados reflejan una persona que pone en marcha su capacidad resiliente a través de la búsqueda de soluciones para superar la situación estresante. Ante las adversidades consiguen resistir, adaptarse y salir bien librados. Cada adversidad puede ser vista como un desafío en el cual se pone en práctica la capacidad de afronte, de superación y adaptación positiva a la experiencia. <br />Un estilo de afrontamiento y resiliencia altos habla de alguien que consigue aquello que se propone y planifica el futuro, responsable de sus acciones y de las consecuencias. Capaz de generar nuevas ideas o nuevos caminos para hacer las cosas, realizar una actividad hasta finalizarla. Encontrar el humor en la vida y utilizarlo por reducir las tensiones. Una persona respetuosa de sí misma y de los demás. Habilidad para resolver conflictos en diversos ámbitos: académico, laboral, personal y social. <br />Una persona segura de sí misma, optimista, confiada y que posee esperanza. Adecuado control de sentimientos, impulsos, con habilidad para demostrar lo que sientes. Dispuesta a pedir ayuda cuando lo necesitas. Autocríticos, optimistas, independientes, con autoconfianza, son abiertos a nuevos aprendizajes, tolerantes y autónomos, lo cual repercute en el nivel de aceptación que nen sobre su situación actual.');
feed.set('Moderado', 'MODERADO: Sugiere la presencia de recursos psicológicos positivos que posiblemente permitirán que logres afrontar las adversidades de manera funcional que te posibiliten desarrollarte de manera adecuada en diversos ámbitos: académico, laboral, personal y social. Aun cuando puede haber distractores, te enfocas en resolver las dificultades, analizando cómo manejarte frente al estresor y procurando organizar estrategias de acción y estableciendo cuál será la mejor forma de resolver el problema. Es importante que esperes la oportunidad apropiada para actuar sobre este, evitando hacer algo prematura e impulsivamente. <br />Es importante que te brindes el espacio para la realización de actividades relajantes y recreativas que contribuyan al desarrollo de un estado óptimo de bienestar en el cual tu capacidad para resolver problemas, creatividad, iniciativa, sentido del humor, autocontrol y la habilidad para encontrar significado a las experiencias de la vida alcancen un nivel máximo logrando así un mejoramiento de la situación a resolver.');
feed.set('Sugestivo', 'SUGESTIVO: Las personas con este nivel de resiliencia y afrontamiento suelen llevar a cabo ante los problemas y las dificultades, estrategias no adaptativas las cuales quizá reducen el estrés a corto plazo, pero pueden dañar la salud a largo plazo. <br />En ocasiones buscas en los demás algún consejo, asistencia e información con el fin de solucionar el problema, lo que te ayuda a sobrellevar la situación y te puede permitir conocer nuevas ideas y estrategias para atacarlo.  Te muestras optimista, aunque rápidamente puedes cambiar hacia la desesperanza. Es común que se te dificulte la redefinición y solución del problema como también la reevaluación que haces del problema.<br />Es importante que seas constante en encarar los problemas de forma positiva y aprender de esas experiencias, así como brindarte espacios para la realización de actividades relajantes y recreativas que contribuyan al desarrollo de un estado óptimo de bienestar en el cual tu capacidad para resolver problemas, creatividad, iniciativa, sentido del humor, autocontrol y la habilidad para encontrar significado a las experiencias de la vida alcancen un nivel máximo logrando así un mejoramiento de la situación a resolver.');
feed.set('Bajo', 'BAJO: Las personas con este nivel de afrontamiento, ante la presencia de algún problema o dificultad suelen ignorarlos. Son comunes las reacciones emocionales como auto inculparse, preocuparse, reservarlo a sí mismo sin compartir con los demás lo que están viviendo, situación que puede generar mayor angustia y malestar emocional. Sueles ver las adversidades como crisis sin darte la oportunidad de aprender de ellas. Las personas que afrontan menos los problemas o que no tienden a reinterpretar positivamente estas situaciones son las que alcanzan menores niveles de bienestar. <br />Sueles mostrar pobre autocontrol ante los problemas, tiendes a aislarte ante estos. Te muestras inflexible ante nuevas ideas y conductas, sintiéndote atacado en tu persona cada vez que el entorno te presenta una situación que no encaje con lo esperado.');
feed.set('Nulo', 'NULO: Como resultado de esto puedes presentar dificultades en diversos ámbitos de tu vida como el personal, laboral, familiar, social, etc. En este nivel de afrontamiento es común que se presenten aspectos como el sentimiento de culpa, el aislamiento social o acciones que no están focalizadas en la resolución del problema (negación, distanciamiento). Es común el rehusarse a creer que el estresor existe o tratar de actuar pensando que el estresor no es real, así como en la disminución del esfuerzo dirigido al estresor, dándose por vencido, sin intentar lograr las metas ya que el estresor está interfiriendo. Te muestras pesimista, desesperanzado, aislamiento social, con pobre autocontrol y autorregulación emocional, bajo autoconcepto y poca consciencia de tus habilidades personal. Pocas veces te das el tiempo para realizar actividades que te permitan la descarga emocional y el estrés. Reservado en cuanto a tu sentir, no sueles pedir ayuda.<br />Los efectos físicos y psicológicos que se desencadenan en las personas con nula resiliencia y afrontamiento podrían ser negativas generando ansiedad, depresión, fracaso escolar, problemas laborales, etc.');

buttons = Array.from(document.getElementsByClassName('button'));
var slides_prev = Array.from(document.getElementsByClassName('slides')[0].childNodes);
slides = slides_prev.filter((e) => ( e.nodeName == "SECTION"));
controls = Array.from(document.getElementsByClassName('controls')[0].childNodes);
questions = Array.from(slides.slice(1, 32).map((e) => (e.getAttribute('data-id'))));

controls.forEach((control) => {
    if (control.nodeName == 'BUTTON' && (control.classList.contains('navigate-right'))) {
        control.addEventListener('click', slideHandler)
    }
})


buttons.forEach((button) => {
    button.addEventListener('mouseover', Hover);
    button.addEventListener('mouseleave', Leave);

    if (button.classList.contains('ra')) {
        button.addEventListener('click', () => {
            currentSlide = document.getElementsByClassName('present')[0];
            selectOption(currentSlide, button, 0);
        })
    }

    if (button.classList.contains('rb')) {
        button.addEventListener('click', () => {
            currentSlide = document.getElementsByClassName('present')[0];
            selectOption(currentSlide, button, 1);
        })
    }

    if (button.classList.contains('rc')) {
        button.addEventListener('click', () => {
            currentSlide = document.getElementsByClassName('present')[0];
            selectOption(currentSlide, button, 2);
        })
    }

    if (button.classList.contains('rd')) {
        button.addEventListener('click', () => {
            currentSlide = document.getElementsByClassName('present')[0];
            selectOption(currentSlide, button, 3);
        })
    }
})

function selectOption(slide, button, value, ) {
    console.log(slide)
    answers.set(slide.getAttribute('data-id'), value);
    removeClassFromChild(currentSlide, 'selected-btn');
    button.classList.add('selected-btn');
    fillButton(button, 'rgb(65, 92, 137)');
}

function removeClassFromChild(node, className) {
    node.childNodes.forEach((child) => {
        if (child.nodeName == 'DIV' && child.classList.contains(className)) {
            child.classList.remove(className);
        }
        if (child.nodeName == 'DIV' && child.classList.contains('button')) {
            console.log(child)
            fillButton(child, 'rgb(74, 134, 232)')
        }
    })
}

function fillButton(button, color) {
    let rectangle = button.childNodes[1]["childNodes"][1]["childNodes"][1]["childNodes"][0]["childNodes"][1];
    rectangle.style.fill = color;
}

function Hover(evt) {
    fillButton(evt.currentTarget, 'rgb(65, 92, 137)');
}

function Leave(evt) {
    if (!evt.currentTarget.classList.contains('selected-btn')) {
        fillButton(evt.currentTarget, 'rgb(74, 134, 232)');
    } else {
        fillButton(evt.currentTarget, 'rgb(65, 92, 137)');
    }
}

function slideHandler() {
    let future = document.getElementsByClassName('future')
    if (future.length <= 2) {
        evaluation();
    }
    loadAnswers();
}

function loadAnswers() {
    currentSlide = document.getElementsByClassName('present')[0];
    if (answers.has(currentSlide.getAttribute('data-id'))) {
        answers.get(currentSlide.getAttribute('data-id'));
    }
}



function evaluation() {
    let score = null;
    let rest = validateAnswers(questions, answers);

    if (rest == null) {
        score = 0;
        for (let [key, value] of answers) {
            score += value;
        }
        let feedback = getFeedBack(score);
        sendData(score, feedback);
       document.getElementsByClassName('controls')[0].style.display = 'none';
        document.getElementById('feedback').innerHTML = 'Con base en las respuetsas proporcionadas se determino tu nivel de afrontamiento y resiliencia como ' + feedback;
   } else {
        alert("te faltan preguntas por contestar!")
      console.log()
        goto(rest);
    } 
}

function goto(id) {
    let diapo = questions.indexOf(id) + 1;
    setTimeout(() => {console.log('redirect'); window.location.assign(`./index.php#/${diapo}`)}, 900);
}

function validateAnswers(q, a) {
    res = null;
    for (let i = 0; i < questions.length; i++) {
        if (!answers.has(questions[i])) {
            res = questions[i];
            break;
        }
    }

    return res;
}

function getFeedBack(score) {
    if (score > 90) {
        return feed.get('Alto');
    } else if (score > 73) {
        return feed.get('Moderado');
    } else if (score > 53) {
        return feed.get('Sugestivo');
    } else if (score > 34) {
        return feed.get('Bajo');
    } else {
        return feed.get('Nulo');
    }
}

function sendData(score, feedback) {
    /*let jsonObj = {
        "curso": "UDC9190",
        "recurso": "A1",
        "calificacion": score,
        "retro": feedback,
        "url": "https://www.w3schools.com/html/html_attributes.asp",
        "usuario": "agentestic@ucol.mx"
    }*/

    let jsonObj = {
        score,
        feedback,
		user : uCorreo,
    }

    console.log(JSON.stringify(jsonObj));
    let APIUrl = './save.php';
    postData(APIUrl, jsonObj).then(result => console.log(JSON.parse(result))).catch(() => alert('No fue posible registrar de forma automática su participación. Envíe un correo a agentestic@ucol.mx y notifique que realizó la actividad'));
	//postData(APIUrl, jsonObj).then(result => console.log(JSON.parse(result))).catch(error => console.log('error:', error));

}



async function postData(url = '', data = {}) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("http-equiv", "Content-Security-Policy");
    // myHeaders.append("content", "upgrade-insecure-requests");


    var raw = JSON.stringify(data);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    };

    let res = await fetch(url, requestOptions)
    return res.json();
    // parses JSON response into native JavaScript objects

}