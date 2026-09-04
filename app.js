let P=null,S=[],cur=null,favs=JSON.parse(localStorage.getItem('favs')||'[]'),fs=+(localStorage.getItem('fs')||19);const $=x=>document.getElementById(x);fetch('data/sermons.json?v=20260904-final', {cache:'no-store'}).then(r=>r.json()).then(x=>{P=x;S=x.sermons;bind();render(S);font()});function bind(){$('q').oninput=e=>{let q=e.target.value.toLowerCase();$('listTitle').textContent=q?'검색 결과':'설교 목록';render(S.filter(s=>(s.title+s.scripture+s.content.join(' ')).toLowerCase().includes(q)))};$('today').onclick=()=>open(S[Math.floor(Math.random()*S.length)].number);$('fav').onclick=()=>{$('listTitle').textContent='즐겨찾기';render(S.filter(s=>favs.includes(s.number)))};$('all').onclick=()=>{$('q').value='';$('listTitle').textContent='설교 목록';render(S)};$('auditBtn').onclick=showAudit;$('auditBack').onclick=showHome;$('back').onclick=showHome;$('star').onclick=()=>{favs=favs.includes(cur)?favs.filter(x=>x!==cur):[...favs,cur];localStorage.setItem('favs',JSON.stringify(favs));star()};$('minus').onclick=()=>setfs(fs-1);$('plus').onclick=()=>setfs(fs+1);$('reset').onclick=()=>setfs(19);$('prev').onclick=()=>nav(-1);$('next').onclick=()=>nav(1);$('dark').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');if('serviceWorker'in navigator)navigator.serviceWorker.register('service-worker.js')}function render(a){$('count').textContent=a.length+'편';$('list').innerHTML='';a.forEach(s=>{let b=document.createElement('button');b.className='item';let im=s.image?`<img src="${s.image}" alt="">`:`<span class="ph">말씀</span>`;b.innerHTML=`<span class=n>${String(s.number).padStart(3,'0')}</span>${im}<span><h3>${s.title}</h3><p>${s.scripture||''}</p></span><b>${favs.includes(s.number)?'★':''}</b>`;b.onclick=()=>open(s.number);$('list').appendChild(b)})}function open(n){cur=n;let s=S.find(x=>x.number===n);$('num').textContent='설교 '+String(s.number).padStart(3,'0');$('title').textContent=s.title;$('verse').textContent=s.scripture||'';$('body').innerHTML=s.content.map(p=>{
    const t=(p||'').trim();
    const isCircle=/^[①②③④⑤⑥⑦⑧⑨⑩]/.test(t);
    const isHeading=/^(첫째|둘째|셋째|넷째|다섯째|여섯째|일곱째|여덟째|아홉째|열째)[,.]?\s/.test(t)
      || /^\d+\.\s+[^\d]/.test(t);
    const cls=isCircle?'circlep':(isHeading?'headingp':'');
    return `<p class="${cls}">${esc(p)}</p>`;
  }).join('');if(s.image){$('hero').src=s.image;$('hero').hidden=false}else $('hero').hidden=true;if(s.url){$('sourceLink').href=s.url;$('sourceLink').parentElement.hidden=false}else $('sourceLink').parentElement.hidden=true;star();$('home').hidden=true;$('audit').hidden=true;$('detail').hidden=false;scrollTo(0,0)}function esc(x){return x.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}function star(){$('star').textContent=favs.includes(cur)?'★':'☆'}function showHome(){$('detail').hidden=true;$('audit').hidden=true;$('home').hidden=false}function showAudit(){

  $('home').hidden=true;

  $('detail').hidden=true;

  $('audit').hidden=false;

  $('auditContent').innerHTML=`

    <section class="intro-block">

      <h3>저자 · 손상기 목사</h3>

      <img class="author-photo"

           src="images/author-son-sang-ki.jpeg"

           alt="손상기 목사">

      <p>

        『시냇가에 심은 나무』는 故 손상기 목사의 원로목사 추대기념 설교집입니다.

        43년의 목회 여정 가운데 전해진 말씀을 모아 1997년 10월 발간되었습니다.

      </p>

    </section>

    <section class="intro-block">

      <h3>약력</h3>

      <div class="intro-text">

        <p>※ 이곳에 설교집에 수록된 손상기 목사 약력을 넣습니다.</p>

      </div>

    </section>

    <section class="intro-block">

      <h3>감사의 글</h3>

      <p class="intro-kicker">For the Lord – 하나님께 드리는 감사</p>

      <blockquote>

        우리가 살아도 주를 위하여 살고 죽어도 주를 위하여 죽나니,

        그러므로 사나 죽으나 우리가 주의 것이로다.

        <br>— 로마서 14:8

      </blockquote>

      <div class="intro-text">

        <p>※ 이곳에 손상기 목사의 「감사의 글」 전문을 넣습니다.</p>

      </div>

    </section>

    <section class="intro-block">

      <h3>출간 축하의 글</h3>

      <div class="congrats-card">

        <h4>내가 보는 손상기 목사</h4>

        <p class="byline">이중태 목사 · 증경총회장 · 강변교회 원로목사</p>

        <p>※ 이곳에 축사 전문을 넣습니다.</p>

      </div>

      <div class="congrats-card">

        <h4>내가 좋아하는 손상기 목사님을 말한다</h4>

        <p class="byline">이만신 목사 · 증경총회장 · 중앙성결교회 담임목사</p>

        <p>※ 이곳에 축사 전문을 넣습니다.</p>

      </div>

    </section>

    <section class="intro-block publication">

      <h3>설교집 발행 정보</h3>

      <p><strong>제목</strong> 『시냇가에 심은 나무』</p>

      <p><strong>발행일</strong> 1997년 10월</p>

      <p><strong>발행인</strong> 손상기 목사 원로목사 추대기념 설교집 출판위원회</p>

      <p><strong>발행처</strong> 기독교대한성결교회 대광교회</p>

    </section>

  `;

  $('home').hidden=true;

  scrollTo(0,0);

}function setfs(n){fs=Math.max(15,Math.min(29,n));localStorage.setItem('fs',fs);font()}function font(){document.documentElement.style.setProperty('--fs',fs+'px')}function nav(d){let i=S.findIndex(s=>s.number===cur);if(S[i+d])open(S[i+d].number)}
;(()=>{
  const previousOpen=open;
  open=function(n){
    previousOpen(n);

    const area=document.getElementById('body');
    if(!area) return;

    [...area.querySelectorAll('p')].forEach(p=>{
      const t=p.textContent.trim();
      if(/^[①②③④⑤⑥⑦⑧⑨⑩]/.test(t)){
        p.classList.remove('headingp');
        p.classList.add('circlep');
      }
    });

    if(Number(n)!==102) return;
    if(area.querySelector('.editor-note')) return;

    const paragraphs=[...area.querySelectorAll('p')];
    const first=paragraphs.find(p=>
      p.textContent.includes('※ 편집자 후기:') ||
      p.textContent.includes('설교집 편집 및 블로깅을 마치며')
    );
    if(!first) return;

    const marker='설교집 편집 및 블로깅을 마치며';
    const full=first.textContent.trim();

    const note=document.createElement('section');
    note.className='editor-note';

    const heading=document.createElement('h3');
    heading.className='editor-note-title';
    heading.textContent=marker;
    note.appendChild(heading);

    let sermonEnd='';
    let noteStart='';

    if(full.includes(marker)){
      const pos=full.indexOf(marker);
      sermonEnd=full.slice(0,pos)
        .replace(/^※\s*편집자\s*후기:\s*/,'')
        .trim();
      noteStart=full.slice(pos+marker.length)
        .replace(/^[.…·\s\-:]+/,'')
        .trim();
    }else{
      noteStart=full.replace(/^※\s*편집자\s*후기:\s*/,'').trim();
    }

    if(noteStart){
      const p=document.createElement('p');
      p.textContent=noteStart;
      note.appendChild(p);
    }

    let move=false;
    paragraphs.forEach(p=>{
      if(p===first){
        move=true;
        return;
      }
      if(move){
        if(p.textContent.includes('아들, 블로그 편집자')){
          p.classList.add('editor-signature');
        }
        note.appendChild(p);
      }
    });

    if(sermonEnd){
      first.textContent=sermonEnd;
      first.insertAdjacentElement('afterend',note);
    }else{
      first.replaceWith(note);
    }
  };
})();
