/* El Rosco de la Historia
   Para cambiar preguntas y pruebas comodín, edita ITEMS (versión normal) y TEA (versión con apoyos visuales).
   Ambas listas usan la misma letra como clave. */
(function(){
  /* Contenido del juego. answers[0] es la palabra que se muestra; el resto son variantes aceptadas. */
  var ITEMS=[
    {l:'A',type:'q',clue:'Persona que estudia el pasado excavando y examinando objetos antiguos que están bajo tierra.',answers:['arqueólogo','arqueologo','arqueóloga','arqueologa','arqueólogos','arqueologos','arqueólogas','arqueologas'],fact:'Los arqueólogos trabajan con pinceles y cepillos pequeños para no romper nada.'},
    {l:'B',type:'q',clue:'Santa ... da nombre al castillo que vigila Alicante desde lo alto del monte Benacantil.',answers:['bárbara','barbara','santa bárbara','santa barbara'],fact:'Según la tradición, el castillo se llama así porque fue conquistado el día de Santa Bárbara, el 4 de diciembre, en el siglo XIII.'},
    {l:'C',type:'q',clue:'Los trozos de vasijas y platos de barro cocido que aparecen en las excavaciones son restos de ...',answers:['cerámica','ceramica'],fact:'Con la cerámica sabemos cómo vivía la gente: qué comía y cómo cocinaba.'},
    {l:'D',type:'q',clue:'La ... de Elche es una escultura ibera muy famosa que se descubrió en 1897 cerca de Elche.',answers:['dama','dama de elche'],fact:'Los iberos vivieron en la costa mediterránea hace más de 2.000 años, antes de que llegaran los romanos.'},
    {l:'E',type:'q',clue:'Paseo de Alicante junto al puerto, con un suelo de mosaico que imita las olas del mar.',answers:['explanada','explanada de españa','explanada de espana'],fact:'Su suelo tiene unos 7,5 millones de piezas pequeñas de mármol rojas, crema y negras.'},
    {l:'F',type:'q',clue:'Los documentos, objetos, edificios y relatos que nos cuentan cómo era el pasado son las ... históricas.',answers:['fuentes','fuente','fuentes históricas','fuentes historicas'],fact:'Gracias a las fuentes, los historiadores saben cosas que pasaron hace muchísimo tiempo.'},
    {l:'G',type:'c',name:'Gran excavación',text:'Haz mímica de arqueólogo o arqueóloga: excava con cuidado, encuentra algo muy antiguo y enséñalo. Tu clase tiene que adivinar qué objeto es. Tienes 30 segundos.',seconds:30,fact:'Los arqueólogos excavan despacio y anotan dónde aparece cada objeto.'},
    {l:'H',type:'q',clue:'Fiesta de Alicante que se celebra en junio, con fuego, monumentos de cartón y mascletàs.',answers:['hogueras','hoguera','hogueras de san juan'],fact:'Las Hogueras de San Juan se celebran del 20 al 24 de junio y son Fiesta de Interés Turístico Internacional.'},
    {l:'I',type:'c',name:'Ibero de piedra',text:'Haz de estatua ibera, como la Dama de Elche: de pie, con gesto serio y sin moverte ni reírte durante 30 segundos.',seconds:30,fact:'Los iberos fueron un pueblo que vivió en la costa del Mediterráneo hace más de 2.000 años.'},
    {l:'J',type:'q',clue:'Pueblo de la provincia de Alicante muy conocido por su turrón blando.',answers:['jijona','xixona'],fact:'El turrón es un dulce tradicional de almendras y miel que se hace en esta zona desde hace muchas generaciones.'},
    {l:'L',type:'q',clue:'Ciudad antigua de iberos y romanos cuyas ruinas están en el Tossal de Manises, en Alicante. Es el origen de la ciudad actual.',answers:['lucentum'],fact:'Hoy se pueden visitar las termas, los restos de muralla y los torreones de Lucentum.'},
    {l:'M',type:'c',name:'Mascletà',text:'Haz de mascletà con las palmas: empieza flojito, sube el ritmo poco a poco y acaba con un gran aplauso final. Tienes 20 segundos.',seconds:20,fact:'Una mascletà se escucha y se siente más que se ve: es un espectáculo de petardos que se dispara de día.'},
    {l:'N',type:'q',clue:'Figura de cartón piedra, muchas veces graciosa, que forma parte de los monumentos de las Hogueras.',answers:['ninot','ninots'],fact:'Los monumentos de las Hogueras se queman la noche del 24 al 25 de junio.'},
    {l:'O',type:'q',clue:'Ciudad de la provincia de Alicante donde nació el poeta Miguel Hernández en 1910.',answers:['orihuela'],fact:'Miguel Hernández era pastor de cabras y escribía poesía mientras cuidaba el rebaño.'},
    {l:'P',type:'c',name:'Patrimonio',text:'Nombra 5 lugares, monumentos, fiestas o comidas típicas de Alicante en 1 minuto.',seconds:60,fact:'El patrimonio es todo lo que heredamos del pasado y tenemos que cuidar.',tip:'Ideas: castillo de Santa Bárbara, Explanada, Tabarca, Hogueras, turrón, Lucentum, MARQ, Palmeral de Elche.'},
    {l:'R',type:'q',clue:'Pueblo de la antigua Italia que dominó el Mediterráneo y dejó ciudades, calzadas y puertos hace unos 2.000 años.',answers:['romanos','romano'],fact:'Muchas palabras del castellano y del valenciano vienen del latín, la lengua de los romanos.'},
    {l:'S',type:'q',clue:'Periodo de cien años. Ahora vivimos en el siglo XXI.',answers:['siglo','siglos'],fact:'Los historiadores usan los siglos para ordenar los hechos en una línea del tiempo.'},
    {l:'T',type:'q',clue:'Isla frente a la costa de Santa Pola que pertenece al municipio de Alicante. Tiene una muralla del siglo XVIII.',answers:['tabarca','nueva tabarca','isla de tabarca','isla tabarca'],fact:'Se fortificó por orden del rey Carlos III y sus primeros habitantes fueron familias de origen genovés. Hoy es la única isla habitada de la Comunitat Valenciana.'},
    {l:'U',type:'q',clue:'Organización internacional que declara Patrimonio de la Humanidad a lugares muy valiosos, como el Palmeral de Elche.',answers:['unesco'],fact:'En el año 2000, el Palmeral de Elche fue declarado Patrimonio de la Humanidad.'},
    {l:'V',type:'c',name:'Voces del pasado',text:'Cuenta algo que ha cambiado desde que tus abuelos o abuelas eran niños: los juegos, las casas, los aparatos, los viajes... Tienes 1 minuto. Si no lo sabes, pregúntales luego en casa.',seconds:60,fact:'Preguntar a las personas mayores es una forma de hacer historia: sus recuerdos también son una fuente.',tip:'Ideas: móviles, coches, juegos, casas, colegios.'},
    {l:'Y',type:'q',clue:'Lugar donde hay restos antiguos enterrados, como una ciudad ibera o romana.',answers:['yacimiento','yacimientos'],fact:'Un yacimiento es como un libro de historia enterrado: cada objeto es una página.'}
  ];
  var N=ITEMS.length;
  var NQ=ITEMS.filter(function(i){return i.type==='q'}).length;
  var NC=N-NQ;
  var STATE_TXT={p:'pendiente',ok:'bien',bad:'mal',s:'pasada'};

  /* Apoyos visuales para la versión TEA. En las preguntas, opts[0] es la respuesta correcta y las otras dos son distractores claramente distintos. */
  var TEA={
    A:{pics:'🔍🏺⛏️',short:'Persona que estudia el pasado. Excava y busca objetos antiguos.',opts:[['arqueólogo','⛏️'],['arquitecto','📐'],['astronauta','🧑‍🚀']],fact:'Los arqueólogos usan pinceles para no romper nada.'},
    B:{pics:'🏰⛰️',short:'Es el nombre de la santa del castillo de Alicante.',opts:[['Bárbara','🏰'],['Beatriz','👩'],['Berta','👧']],fact:'El castillo está en lo alto del monte Benacantil.'},
    C:{pics:'🏺',short:'Trozos de vasijas de barro que se encuentran al excavar.',opts:[['cerámica','🏺'],['cartón','📦'],['cristal','🥛']],fact:'Con la cerámica sabemos cómo vivía la gente.'},
    D:{pics:'👸🏛️',short:'Escultura ibera muy famosa. Se descubrió cerca de Elche en 1897.',opts:[['dama','👸'],['daga','🗡️'],['dado','🎲']],fact:'La Dama de Elche tiene más de 2.000 años.'},
    E:{pics:'🌊🌴🚶',short:'Paseo de Alicante junto al mar. Su suelo parece las olas.',opts:[['explanada','🌊'],['escalera','🪜'],['estación','🚉']],fact:'Su suelo tiene millones de piezas rojas, crema y negras.'},
    F:{pics:'📜🏺🏰',short:'Documentos, objetos y edificios que nos cuentan el pasado.',opts:[['fuentes','📜'],['frutas','🍎'],['flores','🌸']],fact:'Las fuentes nos cuentan cosas del pasado.'},
    G:{pics:'⛏️',name:'Gran excavación',steps:[['⛏️','Excava con cuidado.'],['🏺','Encuentra un objeto muy antiguo.'],['🙋','Enséñalo. Tu clase adivina qué es.']],tip:'',fact:'Los arqueólogos excavan despacio.'},
    H:{pics:'🔥🎆',short:'Fiesta de Alicante en junio. Tiene fuego, ninots y mascletàs.',opts:[['hogueras','🔥'],['helados','🍦'],['hormigas','🐜']],fact:'Se celebran del 20 al 24 de junio.'},
    I:{pics:'🗿',name:'Ibero de piedra',steps:[['🧍','Ponte de pie con gesto serio.'],['🗿','Quédate como una estatua.'],['🤫','No te muevas ni te rías.']],tip:'',fact:'Los iberos vivieron hace más de 2.000 años.'},
    J:{pics:'🍬🌰',short:'Pueblo de Alicante famoso por su turrón blando.',opts:[['Jijona','🍬'],['Japón','🗾'],['jirafa','🦒']],fact:'Allí se hace un turrón muy rico.'},
    L:{pics:'🏛️🧱',short:'Ciudad antigua de iberos y romanos. Sus ruinas están en Alicante.',opts:[['Lucentum','🏛️'],['lámpara','💡'],['lupa','🔍']],fact:'Hoy se pueden visitar sus termas y sus muros.'},
    M:{pics:'🎆',name:'Mascletà',steps:[['👏','Empieza con palmas suaves.'],['🔊','Cada vez más rápido y más fuerte.'],['🎆','Termina con un gran aplauso.']],tip:'',fact:'La mascletà se escucha y se siente mucho.'},
    N:{pics:'🎭',short:'Figura de cartón de los monumentos de las Hogueras.',opts:[['ninot','🎭'],['nube','☁️'],['nariz','👃']],fact:'Los monumentos se queman al final de la fiesta.'},
    O:{pics:'📖✍️',short:'Ciudad de Alicante donde nació el poeta Miguel Hernández.',opts:[['Orihuela','📖'],['oso','🐻'],['olla','🍲']],fact:'Miguel Hernández escribía poesía cuando cuidaba cabras.'},
    P:{pics:'🏰🌊🏝️',name:'Patrimonio',steps:[['🗣️','Di 5 cosas típicas de Alicante.'],['🏰','Pueden ser sitios, fiestas o comidas.'],['⏱️','Tienes 1 minuto.']],tip:'🏰 castillo · 🌊 Explanada · 🏝️ Tabarca · 🔥 Hogueras · 🍬 turrón',fact:'El patrimonio es lo que heredamos y cuidamos.'},
    R:{pics:'🏛️🛡️',short:'Pueblo de la antigua Roma. Construyó ciudades y puertos.',opts:[['romanos','🛡️'],['robots','🤖'],['rosas','🌹']],fact:'Muchas palabras vienen del latín, la lengua de los romanos.'},
    S:{pics:'💯📅',short:'Son cien años.',opts:[['siglo','📅'],['segundo','⏱️'],['semana','🗓️']],fact:'Los siglos ordenan los hechos del pasado.'},
    T:{pics:'🏝️⛵',short:'Isla pequeña cerca de Santa Pola. Tiene una muralla antigua.',opts:[['Tabarca','🏝️'],['tortuga','🐢'],['tren','🚆']],fact:'Hoy viven personas en la isla.'},
    U:{pics:'🌍🏛️',short:'Organización que protege lugares muy valiosos del mundo.',opts:[['UNESCO','🌍'],['uva','🍇'],['uno','1️⃣']],fact:'El Palmeral de Elche es Patrimonio de la Humanidad.'},
    V:{pics:'👵👴',name:'Voces del pasado',steps:[['👵','Piensa en tus abuelos o abuelas de niños.'],['🗣️','Di algo que ha cambiado.'],['⏱️','Tienes 1 minuto.']],tip:'📱 móviles · 🚗 coches · 🎲 juegos · 🏠 casas',fact:'Los recuerdos de las personas mayores cuentan la historia.'},
    Y:{pics:'⛏️🏺📍',short:'Lugar donde hay restos antiguos enterrados.',opts:[['yacimiento','⛏️'],['yogur','🥛'],['yate','🛥️']],fact:'Cada objeto enterrado es como una página de historia.'}
  };

  function $(id){return document.getElementById(id)}
  var panel=$('panel');

  function fresh(prev){
    var total=prev?prev.total:480, mode=prev?prev.mode:'type', tea=prev?prev.tea:false;
    return {status:'intro',total:total,mode:mode,tea:tea,left:total,idx:-1,res:ITEMS.map(function(){return 'p'}),ch:null,revealed:false,reason:'',elapsed:0,fin:{}};
  }
  var S=fresh();
  /* Enlace directo a la versión TEA: la dirección de la página terminada en #tea */
  try{if(location.hash==='#tea'){S.tea=true;S.total=0;S.left=0;}}catch(e){}
  function applyTea(){var w=document.querySelector('.wrap');if(w)w.classList.toggle('tea',S.tea);}

  /* Comparación de respuestas: sin mayúsculas, sin tildes, sin artículo y con un margen para faltas de escritura. */
  function norm(s){
    s=String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
    return s.replace(/^(el|la|los|las|un|una|unos|unas) /,'');
  }
  function lev(a,b){
    var m=a.length,n=b.length;
    if(!m)return n; if(!n)return m;
    var p=[],j,i;
    for(j=0;j<=n;j++)p[j]=j;
    for(i=1;i<=m;i++){
      var c=[i];
      for(j=1;j<=n;j++){
        c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a.charAt(i-1)===b.charAt(j-1)?0:1));
      }
      p=c;
    }
    return p[n];
  }
  function isCorrect(input,item){
    var n=norm(input);
    if(!n)return false;
    for(var k=0;k<item.answers.length;k++){
      var a=norm(item.answers[k]);
      if(n===a)return true;
      var tol=a.length>=9?2:(a.length>=6?1:0);
      if(tol&&lev(n,a)<=tol)return true;
    }
    return false;
  }

  function fmt(sec){
    sec=Math.max(0,Math.ceil(sec));
    var m=Math.floor(sec/60),s=sec%60;
    return m+':'+(s<10?'0':'')+s;
  }
  function counts(){
    var ok=0,bad=0,left=0;
    S.res.forEach(function(r){if(r==='ok')ok++;else if(r==='bad')bad++;else left++;});
    return {ok:ok,bad:bad,left:left};
  }

  /* Rosco */
  function buildRosco(){
    var ol=$('nodes');ol.innerHTML='';
    ITEMS.forEach(function(it,i){
      var a=(-90+i*360/N)*Math.PI/180,R=43;
      var li=document.createElement('li');
      li.className='node'+(it.type==='c'?' ch':'');
      li.style.left=(50+R*Math.cos(a)).toFixed(2)+'%';
      li.style.top=(50+R*Math.sin(a)).toFixed(2)+'%';
      li.textContent=it.l;
      ol.appendChild(li);
    });
  }
  function paintRosco(){
    var kids=$('nodes').children;
    for(var i=0;i<kids.length;i++){
      var li=kids[i],r=S.res[i];
      li.setAttribute('data-s',r);
      var cur=(i===S.idx)&&(S.status==='question'||S.status==='feedback'||S.status==='challenge');
      li.classList.toggle('cur',cur);
      li.setAttribute('aria-label','Letra '+ITEMS[i].l+', '+(ITEMS[i].type==='c'?'prueba comodín, ':'')+STATE_TXT[r]);
    }
  }
  function paintHub(){
    var c=counts();
    applyTea();
    $('tOk').textContent=c.ok;$('tBad').textContent=c.bad;$('tLeft').textContent=c.left;
    $('lblBad').textContent=S.tea?'repasar':'mal';
    var t=$('hubTime'),lab=$('hubLab');
    if(S.status==='end'){lab.textContent='Fin';t.textContent=c.ok+'/'+N;t.classList.remove('low');return;}
    if(S.tea){lab.textContent='Hechas';t.textContent=(N-c.left)+'/'+N;t.classList.remove('low');return;}
    if(S.total===0){lab.textContent='Sin límite';t.textContent='∞';t.classList.remove('low');return;}
    lab.textContent='Tiempo';
    t.textContent=fmt(S.left);
    t.classList.toggle('low',S.status!=='intro'&&S.left<=30);
  }

  /* Reloj */
  var tm=null,lastT=0;
  function startLoop(){stopLoop();lastT=performance.now();tm=setInterval(tick,200);}
  function stopLoop(){if(tm){clearInterval(tm);tm=null;}}
  function tick(){
    var now=performance.now(),dt=(now-lastT)/1000;lastT=now;
    if(S.status==='question'&&!S.revealed){
      S.elapsed+=dt;
      if(S.total>0){
        S.left=Math.max(0,S.left-dt);
        paintHub();
        if(S.left<=0){endGame('time');}
      }
    }else if(S.status==='challenge'&&S.ch&&S.ch.phase==='running'){
      S.ch.left=Math.max(0,S.ch.left-dt);
      var el=$('chTime');
      if(el)el.textContent=Math.ceil(S.ch.left);
      var bar=$('chBar');
      if(bar)bar.style.width=(S.ch.left/ITEMS[S.idx].seconds*100)+'%';
      if(S.ch.left<=0){S.ch.phase='done';renderChallenge();}
    }
  }

  /* Flujo */
  function nextIndex(from){
    for(var k=1;k<=N;k++){
      var j=(((from+k)%N)+N)%N;
      if((S.res[j]==='p'||S.res[j]==='s')&&!S.fin[j])return j;
    }
    return -1;
  }
  function startGame(){
    S.res=ITEMS.map(function(){return 'p'});
    S.fin={};
    S.idx=-1;S.left=S.total;S.elapsed=0;S.reason='';
    startLoop();
    goNext(-1);
  }
  function goNext(from){
    var j=nextIndex(from);
    if(j<0){endGame('done');return;}
    S.idx=j;S.revealed=false;
    if(ITEMS[j].type==='c'){
      S.status='challenge';S.ch={phase:'ready',left:ITEMS[j].seconds};
      renderChallenge();
    }else{
      S.status='question';renderQuestion();
    }
    paintRosco();paintHub();
  }
  function resolve(result){
    S.res[S.idx]=result;
    S.status='feedback';
    S.ch=null;
    renderFeedback(result);
    paintRosco();paintHub();
  }
  function pass(){
    /* En la versión TEA, una letra pasada vuelve una sola vez; si se vuelve a pasar, se aparca. */
    if(S.tea&&S.res[S.idx]==='s')S.fin[S.idx]=true;
    S.res[S.idx]='s';
    S.ch=null;
    goNext(S.idx);
  }
  function endGame(reason){
    stopLoop();
    S.status='end';S.reason=reason;S.ch=null;
    renderEnd();paintRosco();paintHub();
  }

  function focusFirst(){
    var el=panel.querySelector('[data-autofocus]');
    if(el){try{el.focus({preventScroll:true});}catch(e){el.focus();}}
  }
  function bindQuit(){
    var b=$('quit');if(!b)return;
    var armed=false,t=null;
    b.addEventListener('click',function(){
      if(!armed){
        armed=true;b.textContent='¿Seguro? Pulsa otra vez para terminar';
        t=setTimeout(function(){armed=false;b.textContent='Terminar ahora';},3500);
      }else{clearTimeout(t);endGame('quit');}
    });
  }

  /* Vistas */
  function renderIntro(){
    if(S.tea){renderIntroTea();return;}
    panel.innerHTML=
      '<h2>¿Cuánto sabes de la historia de Alicante?</h2>'+
      '<p class="lead">'+N+' letras: '+NQ+' preguntas y '+NC+' pruebas comodín. Acierta la palabra que empieza por la letra, o supera la prueba, para pintarla de verde.</p>'+
      '<ul class="rules">'+
        '<li>Si no lo sabes, pulsa <strong>Pasapalabra</strong>. La letra vuelve en la segunda vuelta.</li>'+
        '<li>Las pruebas comodín se hacen de pie y delante de todos. ¡Con ganas!</li>'+
        '<li>Después de cada letra descubrirás un dato sobre la historia.</li>'+
      '</ul>'+
      '<div class="legend" aria-hidden="true"><span><i class="sw"></i>Pregunta</span><span><i class="sw ch"></i>Prueba comodín</span><span><i class="sw ok"></i>Bien</span><span><i class="sw bad"></i>Mal</span><span><i class="sw s"></i>Pasada</span></div>'+
      '<fieldset><legend>Tiempo</legend><div class="seg">'+
        '<label><input type="radio" name="time" value="300"><span>5 minutos</span></label>'+
        '<label><input type="radio" name="time" value="480"><span>8 minutos</span></label>'+
        '<label><input type="radio" name="time" value="0"><span>Sin límite</span></label>'+
      '</div></fieldset>'+
      '<fieldset><legend>Cómo se responde</legend><div class="seg">'+
        '<label><input type="radio" name="mode" value="type"><span>Escribiendo</span></label>'+
        '<label><input type="radio" name="mode" value="voice"><span>En voz alta (la persona docente comprueba)</span></label>'+
      '</div></fieldset>'+
      versionHTML()+
      '<div class="row"><button class="btn" id="start" type="button" data-autofocus>Empezar el rosco</button></div>';
    bindVersion();
    var rt=panel.querySelectorAll('input[name="time"]'),rm=panel.querySelectorAll('input[name="mode"]');
    Array.prototype.forEach.call(rt,function(r){
      r.checked=(Number(r.value)===S.total);
      r.addEventListener('change',function(){S.total=Number(r.value);S.left=S.total;paintHub();});
    });
    Array.prototype.forEach.call(rm,function(r){
      r.checked=(r.value===S.mode);
      r.addEventListener('change',function(){S.mode=r.value;});
    });
    $('start').addEventListener('click',startGame);
  }

  /* Versión TEA */
  function versionHTML(){
    return '<fieldset><legend>Versión</legend><div class="seg">'+
      '<label><input type="radio" name="ver" value="std"><span>Normal</span></label>'+
      '<label><input type="radio" name="ver" value="tea"><span>Con apoyos visuales</span></label>'+
    '</div></fieldset>';
  }
  function bindVersion(){
    Array.prototype.forEach.call(panel.querySelectorAll('input[name="ver"]'),function(r){
      r.checked=((r.value==='tea')===S.tea);
      r.addEventListener('change',function(){
        S.tea=(r.value==='tea');
        S.total=S.tea?0:480;S.left=S.total;
        renderIntro();paintHub();
      });
    });
  }
  function renderIntroTea(){
    panel.innerHTML=
      '<h2>El Rosco de la Historia</h2>'+
      '<div class="steps3">'+
        '<div class="s3"><span class="pic" aria-hidden="true">👀</span><b>1. Mira</b></div>'+
        '<div class="s3"><span class="pic" aria-hidden="true">👆</span><b>2. Elige</b></div>'+
        '<div class="s3"><span class="pic" aria-hidden="true">⭐</span><b>3. Descubre</b></div>'+
      '</div>'+
      '<ul class="rules">'+
        '<li>Hay '+N+' letras.</li>'+
        '<li>No hay prisa y no hay reloj.</li>'+
        '<li>Si no quieres una letra, pulsa «Ahora no».</li>'+
        '<li>Al terminar una letra, pulsa «Siguiente».</li>'+
      '</ul>'+
      '<div class="legend"><span><i class="sw ok"></i>Bien</span><span><i class="sw bad"></i>Para repasar</span><span><i class="sw s"></i>Ahora no</span><span><i class="sw ch"></i>Prueba</span></div>'+
      versionHTML()+
      '<div class="row"><button class="btn" id="start" type="button" data-autofocus>Empezar</button></div>';
    bindVersion();
    $('start').addEventListener('click',startGame);
  }
  function renderQuestionTea(){
    var it=ITEMS[S.idx],t=TEA[it.l];
    var cor=t.opts[0],order=t.opts.slice(1);
    order.splice(S.idx%3,0,cor);
    var canSay=('speechSynthesis' in window)&&('SpeechSynthesisUtterance' in window);
    panel.innerHTML=
      '<div class="qhead"><span class="badge">'+it.l+'</span><p class="kicker">Letra '+it.l+'</p></div>'+
      '<div class="bigpic pic" aria-hidden="true">'+t.pics+'</div>'+
      '<p class="clue">'+t.short+'</p>'+
      (canSay?'<div class="row"><button class="btn quiet" id="say" type="button"><span class="pic" aria-hidden="true">🔊</span> Escuchar</button></div>':'')+
      '<div class="opts">'+order.map(function(o,i){
        return '<button type="button" class="opt" data-i="'+i+'"><span class="pic" aria-hidden="true">'+o[1]+'</span><span>'+o[0]+'</span></button>';
      }).join('')+'</div>'+
      '<div class="row"><button class="btn quiet" id="pass" type="button">Ahora no</button></div>'+
      '<button class="link" id="quit" type="button">Terminar ahora</button>';
    Array.prototype.forEach.call(panel.querySelectorAll('.opt'),function(b){
      b.addEventListener('click',function(){resolve(order[Number(b.getAttribute('data-i'))]===cor?'ok':'bad');});
    });
    $('pass').addEventListener('click',pass);
    var say=$('say');
    if(say)say.addEventListener('click',function(){
      try{var u=new SpeechSynthesisUtterance(t.short);u.lang='es-ES';u.rate=.9;window.speechSynthesis.cancel();window.speechSynthesis.speak(u);}catch(e){}
    });
    bindQuit();
  }
  function renderChallengeTea(){
    var it=ITEMS[S.idx],ch=S.ch,t=TEA[it.l];
    var html=
      '<div class="qhead"><span class="badge ch">'+it.l+'</span><div><p class="kicker">Prueba comodín</p><h2>'+it.name+'</h2></div></div>'+
      '<ol class="vsteps">'+t.steps.map(function(s){return '<li><span class="pic" aria-hidden="true">'+s[0]+'</span><span>'+s[1]+'</span></li>';}).join('')+'</ol>';
    if(t.tip)html+='<p class="note"><span class="pic" aria-hidden="true">💡</span> '+t.tip+'</p>';
    if(ch.phase==='ready'){
      html+=
        '<p class="note"><span class="pic" aria-hidden="true">⏱️</span> '+it.seconds+' segundos</p>'+
        '<div class="row"><button class="btn" type="button" id="go" data-autofocus>Empezar</button><button class="btn quiet" type="button" id="pass">Ahora no</button></div>';
    }else{
      html+=
        (ch.phase==='running'
          ?'<div class="count" id="chTime" role="timer">'+Math.ceil(ch.left)+'</div>'
          :'<div class="count done" id="chTime">¡Tiempo!</div>')+
        '<div class="bar" aria-hidden="true"><i id="chBar" style="width:'+(ch.left/it.seconds*100)+'%"></i></div>'+
        '<div class="row"><button class="btn" type="button" id="yes" data-autofocus>Sí, hecho</button><button class="btn quiet" type="button" id="no">Lo intento otro día</button></div>';
    }
    html+='<button class="link" id="quit" type="button">Terminar ahora</button>';
    panel.innerHTML=html;
    if(ch.phase==='ready'){
      $('go').addEventListener('click',function(){S.ch.phase='running';lastT=performance.now();renderChallenge();});
      $('pass').addEventListener('click',pass);
    }else{
      $('yes').addEventListener('click',function(){resolve('ok');});
      $('no').addEventListener('click',function(){resolve('bad');});
    }
    bindQuit();focusFirst();
  }
  function renderFeedbackTea(result){
    var it=ITEMS[S.idx],t=TEA[it.l],ok=result==='ok',isC=it.type==='c';
    var html='<div class="fb '+(ok?'good':'bad')+'" role="status">'+(ok?'<span class="pic" aria-hidden="true">⭐</span> ¡Muy bien!':'Para repasar')+'</div>';
    html+='<div class="bigpic pic" aria-hidden="true">'+t.pics+'</div>';
    if(!isC)html+='<p class="answer-line">Es <strong>'+t.opts[0][0]+'</strong></p>';
    html+='<div class="fact"><p class="kicker">¿Sabías que…?</p><p>'+t.fact+'</p></div>';
    var more=nextIndex(S.idx)>=0;
    html+='<div class="row"><button class="btn" type="button" id="next" data-autofocus>'+(more?'Siguiente':'Ver el final')+'</button></div>';
    html+='<button class="link" id="quit" type="button">Terminar ahora</button>';
    panel.innerHTML=html;
    $('next').addEventListener('click',function(){goNext(S.idx);});
    bindQuit();focusFirst();
  }

  function renderQuestion(){
    if(S.tea){renderQuestionTea();return;}
    var it=ITEMS[S.idx];
    var html=
      '<div class="qhead"><span class="badge">'+it.l+'</span><div><p class="kicker">Empieza por la letra '+it.l+'</p></div></div>'+
      '<p class="clue">'+it.clue+'</p>';
    if(S.mode==='type'){
      html+=
        '<form id="form" autocomplete="off" novalidate>'+
          '<label class="sr" for="answer">Tu respuesta</label>'+
          '<input id="answer" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Escribe la palabra" data-autofocus>'+
          '<p class="hint" id="hint" role="status"></p>'+
          '<div class="row"><button class="btn" type="button" id="send">Responder</button><button class="btn skip" type="button" id="pass">Pasapalabra</button></div>'+
        '</form>';
    }else{
      html+=
        '<div id="voice">'+
          '<div class="row"><button class="btn" type="button" id="reveal" data-autofocus>Ver la respuesta</button><button class="btn skip" type="button" id="pass">Pasapalabra</button></div>'+
        '</div>';
    }
    html+='<button class="link" id="quit" type="button">Terminar ahora</button>';
    panel.innerHTML=html;
    $('pass').addEventListener('click',pass);
    if(S.mode==='type'){
      /* No depende del envío de formulario: el visor puede bloquearlo. Funciona con el botón y con Intro. */
      var sent=false;
      function sendAnswer(){
        if(sent)return;
        var v=$('answer').value;
        if(!norm(v)){$('hint').textContent='Escribe una respuesta o pulsa Pasapalabra.';return;}
        sent=true;
        resolve(isCorrect(v,it)?'ok':'bad');
      }
      $('form').addEventListener('submit',function(e){e.preventDefault();});
      $('send').addEventListener('click',sendAnswer);
      $('answer').addEventListener('keydown',function(e){
        if(e.key==='Enter'){e.preventDefault();sendAnswer();}
      });
    }else{
      $('reveal').addEventListener('click',function(){
        S.revealed=true;
        $('voice').innerHTML=
          '<p class="answer-line">La respuesta es <strong>'+it.answers[0]+'</strong></p>'+
          '<div class="row" style="margin-top:.8rem"><button class="btn" type="button" id="yes" data-autofocus>Ha acertado</button><button class="btn bad" type="button" id="no">Ha fallado</button></div>';
        $('yes').addEventListener('click',function(){resolve('ok');});
        $('no').addEventListener('click',function(){resolve('bad');});
        focusFirst();
      });
    }
    bindQuit();focusFirst();
  }

  function renderChallenge(){
    if(S.tea){renderChallengeTea();return;}
    var it=ITEMS[S.idx],ch=S.ch;
    var html=
      '<div class="qhead"><span class="badge ch">'+it.l+'</span><div><p class="kicker">Prueba comodín</p><h2>'+it.name+'</h2></div></div>'+
      '<p class="clue">'+it.text+'</p>';
    if(ch.phase==='ready'){
      html+=
        '<p class="note">Tiempo de la prueba: '+it.seconds+' segundos. El reloj del rosco se detiene mientras tanto.</p>'+
        '<div class="row"><button class="btn" type="button" id="go" data-autofocus>¡Empezar la prueba!</button><button class="btn skip" type="button" id="pass">Pasapalabra</button></div>';
    }else{
      html+=
        (ch.phase==='running'
          ?'<div class="count" id="chTime" role="timer">'+Math.ceil(ch.left)+'</div>'
          :'<div class="count done" id="chTime">¡Tiempo!</div>')+
        '<p class="note">¿Lo habéis conseguido?</p>'+
        '<div class="row"><button class="btn" type="button" id="yes" data-autofocus>¡Superada!</button><button class="btn bad" type="button" id="no">No ha salido</button></div>';
    }
    html+='<button class="link" id="quit" type="button">Terminar ahora</button>';
    panel.innerHTML=html;
    if(ch.phase==='ready'){
      $('go').addEventListener('click',function(){S.ch.phase='running';lastT=performance.now();renderChallenge();});
      $('pass').addEventListener('click',pass);
    }else{
      $('yes').addEventListener('click',function(){resolve('ok');});
      $('no').addEventListener('click',function(){resolve('bad');});
    }
    bindQuit();focusFirst();
  }

  function renderFeedback(result){
    if(S.tea){renderFeedbackTea(result);return;}
    var it=ITEMS[S.idx],ok=result==='ok',isC=it.type==='c';
    var title=isC?(ok?'¡Prueba superada!':'No ha salido. ¡Otra vez será!'):(ok?'¡Correcto!':'No era esa');
    var html='<div class="fb '+(ok?'good':'bad')+'" role="status">'+title+'</div>';
    html+='<div class="bigpic sm pic" aria-hidden="true">'+TEA[it.l].pics+'</div>';
    if(!isC)html+='<p class="answer-line">La respuesta es <strong>'+it.answers[0]+'</strong></p>';
    if(isC&&it.tip)html+='<p class="note">'+it.tip+'</p>';
    html+='<div class="fact"><p class="kicker">¿Sabías que…?</p><p>'+it.fact+'</p></div>';
    var more=nextIndex(S.idx)>=0;
    html+='<div class="row"><button class="btn" type="button" id="next" data-autofocus>'+(more?'Siguiente letra':'Ver resultados')+'</button></div>';
    html+='<button class="link" id="quit" type="button">Terminar ahora</button>';
    panel.innerHTML=html;
    $('next').addEventListener('click',function(){goNext(S.idx);});
    bindQuit();focusFirst();
  }

  function renderEnd(){
    var c=counts();
    var title;
    if(S.reason==='time')title='¡Se acabó el tiempo!';
    else if(S.reason==='quit')title='Rosco terminado';
    else title='¡Rosco completado!';
    if(S.tea)title='¡Has terminado el rosco!';
    var msg;
    if(c.ok===N)msg='Todas las letras en verde. Eres una persona experta en la historia de Alicante.';
    else if(c.ok>=Math.ceil(N*0.75))msg='¡Gran trabajo de historiador o historiadora! Casi no se te escapa nada.';
    else if(c.ok>=Math.ceil(N*0.5))msg='Muy buen trabajo. Repasa lo que has fallado y el próximo rosco será perfecto.';
    else if(c.ok>=Math.ceil(N*0.25))msg='Vas descubriendo el pasado. Repasa las respuestas y vuelve a probar.';
    else msg='Toca seguir investigando. Repasa las respuestas y juega otra vez.';
    if(S.tea)msg='Gracias por jugar. Las letras para repasar están marcadas en naranja.';
    var chips=ITEMS.map(function(it,i){
      var r=S.res[i],mark=r==='ok'?'Bien':(r==='bad'?'Mal':'Sin resolver');
      var word=it.type==='c'?it.name:it.answers[0];
      return '<li class="chip'+(it.type==='c'?' c':'')+'" data-s="'+r+'" aria-label="'+it.l+', '+word+', '+mark+'"><b>'+it.l+'</b><em>'+word+'</em></li>';
    }).join('');
    panel.innerHTML=
      '<h2>'+title+'</h2>'+
      '<p class="lead">'+msg+'</p>'+
      '<div class="stats">'+
        '<div class="stat"><b>'+c.ok+'</b><span>Bien</span></div>'+
        '<div class="stat"><b>'+c.bad+'</b><span>'+(S.tea?'Para repasar':'Mal')+'</span></div>'+
        '<div class="stat"><b>'+c.left+'</b><span>Sin resolver</span></div>'+
        '<div class="stat"><b>'+fmt(S.elapsed)+'</b><span>Tiempo de juego</span></div>'+
      '</div>'+
      '<div><p class="kicker" style="margin-bottom:.5rem">Repaso del rosco</p><ul class="review">'+chips+'</ul></div>'+
      '<div class="row"><button class="btn" type="button" id="again" data-autofocus>Jugar otra vez</button></div>';
    $('again').addEventListener('click',function(){
      S=fresh(S);renderIntro();paintRosco();paintHub();
    });
    focusFirst();
  }

  buildRosco();
  renderIntro();
  paintRosco();
  paintHub();
})();
