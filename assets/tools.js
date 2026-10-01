
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const G=window.NOREQIA_I18N||{};
const COMMON_I18N={
en:{copy:"Copy",download:"Download",clear:"Clear",generate:"Generate",calculate:"Calculate",convert:"Convert",input:"Input",output:"Output",from:"From",to:"To",width:"Width",height:"Height",quality:"Quality",choose_file:"Choose file",output_format:"Output format"},
tr:{copy:"Kopyala",download:"İndir",clear:"Temizle",generate:"Üret",calculate:"Hesapla",convert:"Dönüştür",input:"Girdi",output:"Çıktı",from:"Kaynak",to:"Hedef",width:"Genişlik",height:"Yükseklik",quality:"Kalite",choose_file:"Dosya seç",output_format:"Dosya formatı"},
es:{copy:"Copiar",download:"Descargar",clear:"Limpiar",generate:"Generar",calculate:"Calcular",convert:"Convertir",input:"Entrada",output:"Salida",from:"De",to:"A",width:"Ancho",height:"Alto",quality:"Calidad",choose_file:"Elegir archivo",output_format:"Formato de salida"},
de:{copy:"Kopieren",download:"Herunterladen",clear:"Leeren",generate:"Erzeugen",calculate:"Berechnen",convert:"Konvertieren",input:"Eingabe",output:"Ausgabe",from:"Von",to:"Nach",width:"Breite",height:"Höhe",quality:"Qualität",choose_file:"Datei wählen",output_format:"Ausgabeformat"},
fr:{copy:"Copier",download:"Télécharger",clear:"Effacer",generate:"Générer",calculate:"Calculer",convert:"Convertir",input:"Entrée",output:"Sortie",from:"De",to:"Vers",width:"Largeur",height:"Hauteur",quality:"Qualité",choose_file:"Choisir un fichier",output_format:"Format de sortie"},
pt:{copy:"Copiar",download:"Baixar",clear:"Limpar",generate:"Gerar",calculate:"Calcular",convert:"Converter",input:"Entrada",output:"Saída",from:"De",to:"Para",width:"Largura",height:"Altura",quality:"Qualidade",choose_file:"Escolher arquivo",output_format:"Formato de saída"},
it:{copy:"Copia",download:"Scarica",clear:"Cancella",generate:"Genera",calculate:"Calcola",convert:"Converti",input:"Input",output:"Output",from:"Da",to:"A",width:"Larghezza",height:"Altezza",quality:"Qualità",choose_file:"Scegli file",output_format:"Formato di output"},
ru:{copy:"Копировать",download:"Скачать",clear:"Очистить",generate:"Создать",calculate:"Рассчитать",convert:"Конвертировать",input:"Ввод",output:"Вывод",from:"Из",to:"В",width:"Ширина",height:"Высота",quality:"Качество",choose_file:"Выбрать файл",output_format:"Формат результата"},
ja:{copy:"コピー",download:"ダウンロード",clear:"クリア",generate:"生成",calculate:"計算",convert:"変換",input:"入力",output:"出力",from:"変換元",to:"変換先",width:"幅",height:"高さ",quality:"品質",choose_file:"ファイルを選択",output_format:"出力形式"},
zh:{copy:"复制",download:"下载",clear:"清空",generate:"生成",calculate:"计算",convert:"转换",input:"输入",output:"输出",from:"从",to:"到",width:"宽度",height:"高度",quality:"质量",choose_file:"选择文件",output_format:"输出格式"},
id:{copy:"Salin",download:"Unduh",clear:"Bersihkan",generate:"Buat",calculate:"Hitung",convert:"Konversi",input:"Input",output:"Output",from:"Dari",to:"Ke",width:"Lebar",height:"Tinggi",quality:"Kualitas",choose_file:"Pilih file",output_format:"Format keluaran"},
ar:{copy:"نسخ",download:"تنزيل",clear:"مسح",generate:"إنشاء",calculate:"احسب",convert:"تحويل",input:"إدخال",output:"إخراج",from:"من",to:"إلى",width:"العرض",height:"الارتفاع",quality:"الجودة",choose_file:"اختر ملفاً",output_format:"صيغة الناتج"}
};
const CURRENT_LANG=(document.documentElement.lang||"en").toLowerCase().split("-")[0];
const EXTRA_I18N={
en:{
compress_download:"Compress & download",
original_size:"Original size",
output_size:"Output size",
savings:"Savings",size_increase:"Size increase",
resolution:"Resolution",
format:"Format",
processing:"Processing…",
file_too_large:"The selected file is too large. Maximum: 50 MB.",
image_too_large:"The image is too large to process safely. Maximum: 40 megapixels.",
output_larger:"The output is larger than the original. Try WebP/JPG or reduce quality.",png_larger:"Lossless PNG can be larger than the original. Choose WebP or JPG for a smaller file.",
jpeg_white:"JPG does not support transparency. If the image contains transparent areas, they are filled with white.",
png_lossless:"Lossless PNG",
png_lossless_note:"PNG is lossless, so the quality slider is not used.",
encode_error:"The image could not be processed."
},
tr:{
compress_download:"Sıkıştır ve indir",
original_size:"Orijinal boyut",
output_size:"Çıktı boyutu",
savings:"Kazanç",size_increase:"Boyut artışı",
resolution:"Çözünürlük",
format:"Format",
processing:"İşleniyor…",
file_too_large:"Seçilen dosya çok büyük. En fazla 50 MB kullanılabilir.",
image_too_large:"Görsel güvenli şekilde işlenemeyecek kadar büyük. En fazla 40 megapiksel.",
output_larger:"Çıktı orijinal dosyadan daha büyük oldu. WebP/JPG seç veya kaliteyi düşür.",png_larger:"PNG kayıpsız olduğu için çıktı orijinalden daha büyük olabilir. Daha küçük dosya için WebP veya JPG seç.",
jpeg_white:"JPG şeffaflığı desteklemez. Görselde şeffaf alan varsa beyaz arka planla doldurulur.",
png_lossless:"Kayıpsız PNG",
png_lossless_note:"PNG kayıpsızdır; kalite ayarı kullanılmaz.",
encode_error:"Görsel işlenemedi."
},
es:{
compress_download:"Comprimir y descargar",
original_size:"Tamaño original",
output_size:"Tamaño de salida",
savings:"Ahorro",size_increase:"Aumento de tamaño",
resolution:"Resolución",
format:"Formato",
processing:"Procesando…",
file_too_large:"El archivo es demasiado grande. Máximo: 50 MB.",
image_too_large:"La imagen es demasiado grande. Máximo: 40 megapíxeles.",
output_larger:"El archivo de salida es mayor que el original. Prueba WebP/JPG o reduce la calidad.",png_larger:"PNG sin pérdida puede ser más grande que el original. Elige WebP o JPG para reducir el tamaño.",
jpeg_white:"JPG no admite transparencia. Si la imagen contiene áreas transparentes, se rellenan de blanco.",
png_lossless:"PNG sin pérdida",
png_lossless_note:"PNG es sin pérdida; el control de calidad no se utiliza.",
encode_error:"No se pudo procesar la imagen."
},
de:{
compress_download:"Komprimieren und herunterladen",
original_size:"Originalgröße",
output_size:"Ausgabegröße",
savings:"Ersparnis",size_increase:"Größenzunahme",
resolution:"Auflösung",
format:"Format",
processing:"Verarbeitung…",
file_too_large:"Die Datei ist zu groß. Maximum: 50 MB.",
image_too_large:"Das Bild ist zu groß. Maximum: 40 Megapixel.",
output_larger:"Die Ausgabedatei ist größer als das Original. WebP/JPG wählen oder Qualität reduzieren.",png_larger:"Verlustfreies PNG kann größer als das Original sein. Für kleinere Dateien WebP oder JPG wählen.",
jpeg_white:"JPG unterstützt keine Transparenz. Falls transparente Bereiche vorhanden sind, werden sie weiß gefüllt.",
png_lossless:"Verlustfreies PNG",
png_lossless_note:"PNG ist verlustfrei; der Qualitätsregler wird nicht verwendet.",
encode_error:"Das Bild konnte nicht verarbeitet werden."
},
fr:{
compress_download:"Compresser et télécharger",
original_size:"Taille originale",
output_size:"Taille de sortie",
savings:"Économie",size_increase:"Augmentation",
resolution:"Résolution",
format:"Format",
processing:"Traitement…",
file_too_large:"Le fichier est trop volumineux. Maximum : 50 Mo.",
image_too_large:"L'image est trop grande. Maximum : 40 mégapixels.",
output_larger:"Le fichier obtenu est plus grand que l'original. Essayez WebP/JPG ou réduisez la qualité.",png_larger:"Un PNG sans perte peut être plus volumineux que l'original. Choisissez WebP ou JPG pour réduire la taille.",
jpeg_white:"JPG ne gère pas la transparence. Si des zones transparentes existent, elles sont remplies en blanc.",
png_lossless:"PNG sans perte",
png_lossless_note:"PNG est sans perte ; le réglage de qualité n'est pas utilisé.",
encode_error:"Impossible de traiter l'image."
},
pt:{
compress_download:"Comprimir e baixar",
original_size:"Tamanho original",
output_size:"Tamanho de saída",
savings:"Economia",size_increase:"Aumento de tamanho",
resolution:"Resolução",
format:"Formato",
processing:"Processando…",
file_too_large:"O arquivo é muito grande. Máximo: 50 MB.",
image_too_large:"A imagem é muito grande. Máximo: 40 megapixels.",
output_larger:"A saída ficou maior que o original. Tente WebP/JPG ou reduza a qualidade.",png_larger:"PNG sem perdas pode ficar maior que o original. Escolha WebP ou JPG para um arquivo menor.",
jpeg_white:"JPG não suporta transparência. Se houver áreas transparentes, elas serão preenchidas de branco.",
png_lossless:"PNG sem perdas",
png_lossless_note:"PNG é sem perdas; o controle de qualidade não é utilizado.",
encode_error:"Não foi possível processar a imagem."
},
it:{
compress_download:"Comprimi e scarica",
original_size:"Dimensione originale",
output_size:"Dimensione output",
savings:"Risparmio",size_increase:"Aumento dimensione",
resolution:"Risoluzione",
format:"Formato",
processing:"Elaborazione…",
file_too_large:"Il file è troppo grande. Massimo: 50 MB.",
image_too_large:"L'immagine è troppo grande. Massimo: 40 megapixel.",
output_larger:"Il file risultante è più grande dell'originale. Prova WebP/JPG o riduci la qualità.",png_larger:"Il PNG senza perdita può essere più grande dell'originale. Scegli WebP o JPG per ridurre il file.",
jpeg_white:"JPG non supporta la trasparenza. Se sono presenti aree trasparenti, vengono riempite di bianco.",
png_lossless:"PNG senza perdita",
png_lossless_note:"PNG è senza perdita; il controllo qualità non viene utilizzato.",
encode_error:"Impossibile elaborare l'immagine."
},
ru:{
compress_download:"Сжать и скачать",
original_size:"Исходный размер",
output_size:"Размер результата",
savings:"Экономия",size_increase:"Увеличение размера",
resolution:"Разрешение",
format:"Формат",
processing:"Обработка…",
file_too_large:"Файл слишком большой. Максимум: 50 МБ.",
image_too_large:"Изображение слишком большое. Максимум: 40 мегапикселей.",
output_larger:"Результат больше исходного файла. Попробуйте WebP/JPG или снизьте качество.",png_larger:"PNG без потерь может быть больше исходного файла. Для уменьшения размера выберите WebP или JPG.",
jpeg_white:"JPG не поддерживает прозрачность. Если есть прозрачные области, они будут заполнены белым.",
png_lossless:"PNG без потерь",
png_lossless_note:"PNG использует сжатие без потерь; настройка качества не применяется.",
encode_error:"Не удалось обработать изображение."
},
ja:{
compress_download:"圧縮してダウンロード",
original_size:"元のサイズ",
output_size:"出力サイズ",
savings:"削減率",size_increase:"サイズ増加",
resolution:"解像度",
format:"形式",
processing:"処理中…",
file_too_large:"ファイルが大きすぎます。最大50 MBです。",
image_too_large:"画像が大きすぎます。最大40メガピクセルです。",
output_larger:"出力ファイルが元より大きくなりました。WebP/JPGまたは低い品質を試してください。",png_larger:"ロスレスPNGは元のファイルより大きくなる場合があります。小さくするにはWebPまたはJPGを選択してください。",
jpeg_white:"JPGは透明部分を保持できません。透明部分がある場合は白で塗りつぶされます。",
png_lossless:"ロスレスPNG",
png_lossless_note:"PNGはロスレスのため品質スライダーは使用されません。",
encode_error:"画像を処理できませんでした。"
},
zh:{
compress_download:"压缩并下载",
original_size:"原始大小",
output_size:"输出大小",
savings:"节省",size_increase:"体积增加",
resolution:"分辨率",
format:"格式",
processing:"处理中…",
file_too_large:"文件过大，最大支持50 MB。",
image_too_large:"图片过大，最大支持4000万像素。",
output_larger:"输出文件比原文件更大。请尝试WebP/JPG或降低质量。",png_larger:"无损PNG可能比原文件更大。如需更小文件，请选择WebP或JPG。",
jpeg_white:"JPG不支持透明背景。如存在透明区域，将以白色填充。",
png_lossless:"无损PNG",
png_lossless_note:"PNG为无损格式，因此不使用质量滑块。",
encode_error:"无法处理图片。"
},
id:{
compress_download:"Kompres dan unduh",
original_size:"Ukuran asli",
output_size:"Ukuran hasil",
savings:"Penghematan",size_increase:"Ukuran bertambah",
resolution:"Resolusi",
format:"Format",
processing:"Memproses…",
file_too_large:"File terlalu besar. Maksimum: 50 MB.",
image_too_large:"Gambar terlalu besar. Maksimum: 40 megapiksel.",
output_larger:"Hasil lebih besar dari file asli. Coba WebP/JPG atau kurangi kualitas.",png_larger:"PNG lossless dapat lebih besar dari file asli. Pilih WebP atau JPG untuk ukuran lebih kecil.",
jpeg_white:"JPG tidak mendukung transparansi. Jika ada area transparan, area tersebut akan diisi putih.",
png_lossless:"PNG lossless",
png_lossless_note:"PNG bersifat lossless; pengaturan kualitas tidak digunakan.",
encode_error:"Gambar tidak dapat diproses."
},
ar:{
compress_download:"ضغط وتنزيل",
original_size:"الحجم الأصلي",
output_size:"حجم الناتج",
savings:"التوفير",size_increase:"زيادة الحجم",
resolution:"الدقة",
format:"الصيغة",
processing:"جارٍ المعالجة…",
file_too_large:"الملف كبير جداً. الحد الأقصى 50 ميجابايت.",
image_too_large:"الصورة كبيرة جداً. الحد الأقصى 40 ميجابكسل.",
output_larger:"حجم الناتج أكبر من الملف الأصلي. جرّب WebP/JPG أو خفّض الجودة.",png_larger:"قد يكون PNG بدون فقد أكبر من الملف الأصلي. اختر WebP أو JPG للحصول على ملف أصغر.",
jpeg_white:"صيغة JPG لا تدعم الشفافية. إذا كانت الصورة تحتوي على مناطق شفافة فسيتم ملؤها باللون الأبيض.",
png_lossless:"PNG بدون فقد",
png_lossless_note:"PNG صيغة بدون فقد، لذلك لا يتم استخدام شريط الجودة.",
encode_error:"تعذرت معالجة الصورة."
}
};
const t=(k,f)=>G[k]||COMMON_I18N[CURRENT_LANG]?.[k]||EXTRA_I18N[CURRENT_LANG]?.[k]||COMMON_I18N.en[k]||EXTRA_I18N.en[k]||f||k;
const CASE_I18N={
en:{upper:"UPPERCASE",lower:"lowercase",title:"Title Case",sentence:"Sentence case"},
tr:{upper:"BÜYÜK HARF",lower:"küçük harf",title:"Başlık Biçimi",sentence:"Cümle biçimi"},
es:{upper:"MAYÚSCULAS",lower:"minúsculas",title:"Formato de título",sentence:"Formato de oración"},
de:{upper:"GROSSBUCHSTABEN",lower:"kleinbuchstaben",title:"Titelschreibweise",sentence:"Satzschreibweise"},
fr:{upper:"MAJUSCULES",lower:"minuscules",title:"Casse de titre",sentence:"Casse de phrase"},
pt:{upper:"MAIÚSCULAS",lower:"minúsculas",title:"Formato de título",sentence:"Formato de frase"},
it:{upper:"MAIUSCOLO",lower:"minuscolo",title:"Formato titolo",sentence:"Formato frase"},
ru:{upper:"ВЕРХНИЙ РЕГИСТР",lower:"нижний регистр",title:"Регистр заголовка",sentence:"Регистр предложения"},
ja:{upper:"大文字",lower:"小文字",title:"タイトル形式",sentence:"文形式"},
zh:{upper:"大写",lower:"小写",title:"标题格式",sentence:"句子格式"},
id:{upper:"HURUF BESAR",lower:"huruf kecil",title:"Format Judul",sentence:"Format Kalimat"},
ar:{upper:"أحرف كبيرة",lower:"أحرف صغيرة",title:"تنسيق العنوان",sentence:"تنسيق الجملة"}
};

function secureRandomInt(min,max){
  min=Math.ceil(Number(min));
  max=Math.floor(Number(max));

  if(
    !Number.isSafeInteger(min) ||
    !Number.isSafeInteger(max) ||
    max<min
  ){
    return null;
  }

  const span=BigInt(max)-BigInt(min)+1n;
  const universe=1n<<64n;
  const limit=universe-(universe%span);
  const buf=new Uint32Array(2);

  let r;

  do{
    crypto.getRandomValues(buf);
    r=(BigInt(buf[0])<<32n)|BigInt(buf[1]);
  }while(r>=limit);

  return Number(
    BigInt(min)+(r%span)
  );
}

function utf8ToBase64(value){
  const bytes=new TextEncoder().encode(String(value));
  let binary="";
  const chunk=8192;

  for(let i=0;i<bytes.length;i+=chunk){
    binary+=String.fromCharCode(
      ...bytes.subarray(i,i+chunk)
    );
  }

  return btoa(binary);
}

function base64ToUtf8(value){
  const clean=String(value||"").replace(/\s+/g,"");
  const binary=atob(clean);
  const bytes=new Uint8Array(binary.length);

  for(let i=0;i<binary.length;i++){
    bytes[i]=binary.charCodeAt(i);
  }

  return new TextDecoder(
    "utf-8",
    {fatal:true}
  ).decode(bytes);
}
function blobDownload(blob,name){const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1200)}
function readImage(file){return new Promise((ok,no)=>{const u=URL.createObjectURL(file),i=new Image;i.onload=()=>{URL.revokeObjectURL(u);ok(i)};i.onerror=no;i.src=u})}
function canvasBlob(c,type="image/png",q=.9){return new Promise((ok,no)=>c.toBlob(b=>b?ok(b):no(new Error("ENCODE_FAILED")),type,q))}
function baseName(n="image"){return n.replace(/\.[^.]+$/,"").replace(/[^a-z0-9_-]+/gi,"-").slice(0,80)||"image"}
function formatBytes(n){
  if(!Number.isFinite(n)||n<0)return "—";
  if(n<1024)return n+" B";
  if(n<1048576)return (n/1024).toFixed(1)+" KB";
  if(n<1073741824)return (n/1048576).toFixed(2)+" MB";
  return (n/1073741824).toFixed(2)+" GB";
}
async function copyText(v){try{await navigator.clipboard.writeText(v)}catch{const x=document.createElement("textarea");x.value=v;document.body.append(x);x.select();document.execCommand("copy");x.remove()}}
function metric(label,val){return `<div class="metric"><b>${val}</b><span>${label}</span></div>`}
function render(){
 const slug=document.body.dataset.tool;if(!slug)return;
 const box=$("#toolWorkspace"); if(!box)return;
 if(slug==="image-resizer") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("choose_file","Choose file")}<input id="file" type="file" accept="image/*"></label><div class="row"><label>${t("width","Width")}<input id="w" type="number" min="1" max="8192" value="1080"></label><label>${t("height","Height")}<input id="h" type="number" min="1" max="8192" value="1080"></label></div><div class="actions"><button class="btn primary" id="go">${t("download","Download")}</button></div><div class="status" id="status"></div>`;
 if(slug==="image-compressor") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("choose_file","Choose file")}<input id="file" type="file" accept="image/png,image/jpeg,image/webp"></label><label>${t("quality","Quality")}: <b id="ql">78%</b><input id="q" type="range" min="20" max="95" value="78"></label><label>${t("output","Output")}<select id="fmt"><option value="image/webp">WebP</option><option value="image/jpeg">JPG</option><option value="image/png">PNG</option></select></label><div class="actions"><button class="btn primary" id="go">${t("compress_download","Compress & download")}</button></div><div class="status" id="status"></div><div class="result" id="result" hidden></div>`;
 if(slug==="image-converter") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("choose_file","Choose file")}<input id="file" type="file" accept="image/*"></label><label>${t("to","To")}<select id="fmt"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></label><div class="actions"><button class="btn primary" id="go">${t("convert","Convert")}</button></div><div class="status" id="status"></div>`;
 if(["word-counter","character-counter","case-converter","duplicate-line-remover","whitespace-cleaner"].includes(slug)) box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("input","Input")}<textarea id="text" placeholder="${t("type_here","Type or paste text here…")}"></textarea></label><div id="extra"></div><div class="actions" id="actions"></div><div class="result" id="result"></div>`;
 if(slug==="password-generator") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("length","Length")} <b id="ll">20</b><input id="len" type="range" min="8" max="64" value="20"></label><div class="result" id="result">—</div><div class="actions"><button class="btn primary" id="go">${t("generate","Generate")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button></div>`;
 if(slug==="random-number") box.innerHTML=`<h2>${t("tool","Tool")}</h2><div class="row"><label>${t("minimum","Minimum")}<input id="min" type="number" value="1"></label><label>${t("maximum","Maximum")}<input id="max" type="number" value="100"></label></div><div class="big-result" id="result">—</div><button class="btn primary" id="go">${t("generate","Generate")}</button>`;
 if(slug==="percentage-calculator") box.innerHTML=`<h2>${t("tool","Tool")}</h2><div class="row"><label>${t("value","Value")}<input id="value" type="number" value="25"></label><label>${t("total","Total")}<input id="total" type="number" value="200"></label></div><div class="big-result" id="result">12.5%</div><button class="btn primary" id="go">${t("calculate","Calculate")}</button>`;
 if(slug==="age-calculator") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("birth_date","Date of birth")}<input id="birth" type="date"></label><div class="big-result" id="result">—</div><button class="btn primary" id="go">${t("calculate","Calculate")}</button>`;
 if(slug==="date-difference") box.innerHTML=`<h2>${t("tool","Tool")}</h2><div class="row"><label>${t("start_date","Start date")}<input id="a" type="date"></label><label>${t("end_date","End date")}<input id="b" type="date"></label></div><div class="result" id="result">—</div><button class="btn primary" id="go">${t("calculate","Calculate")}</button>`;
 if(slug==="length-converter") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("value","Value")}<input id="value" type="number" value="1"></label><div class="row"><label>${t("from","From")}<select id="from"></select></label><label>${t("to","To")}<select id="to"></select></label></div><div class="big-result" id="result">—</div><button class="btn primary" id="go">${t("convert","Convert")}</button>`;
 if(slug==="qr-code-generator") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("input","Input")}<input id="qrtext" type="text" value="https://example.com"></label><div id="qr" class="qrbox"></div><div class="actions"><button class="btn primary" id="go">${t("generate","Generate")}</button><button class="btn secondary" id="download">${t("download","Download")}</button></div><div class="status" id="status"></div>`;
 if(slug==="color-converter") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>HEX<input id="hex" value="#63e8ff"></label><label>RGB<input id="rgb" value="99, 232, 255"></label><div id="preview" class="color-preview"></div><div class="actions"><button class="btn primary" id="hex2rgb">HEX → RGB</button><button class="btn secondary" id="rgb2hex">RGB → HEX</button></div><div class="status" id="status"></div>`;
 if(slug==="json-formatter") box.innerHTML=`<h2>${t("tool","Tool")}</h2><textarea id="text" placeholder='{"hello":"world"}'></textarea><div class="actions"><button class="btn primary" id="format">${t("format","Format")}</button><button class="btn secondary" id="minify">${t("minify","Minify")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button></div><div class="status" id="status"></div>`;
 if(slug==="base64-converter") box.innerHTML=`<h2>${t("tool","Tool")}</h2><textarea id="text" placeholder="${t("type_here","Type or paste text here…")}"></textarea><div class="actions"><button class="btn primary" id="encode">${t("encode","Encode")}</button><button class="btn secondary" id="decode">${t("decode","Decode")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button></div><div class="status" id="status"></div>`;
 if(slug==="url-encoder-decoder") box.innerHTML=`<h2>${t("tool","Tool")}</h2><textarea id="text" placeholder="https://example.com/?q=hello world"></textarea><div class="actions"><button class="btn primary" id="encode">${t("encode","Encode")}</button><button class="btn secondary" id="decode">${t("decode","Decode")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button></div><div class="status" id="status"></div>`;
 if(slug==="uuid-generator") box.innerHTML=`<h2>${t("tool","Tool")}</h2><label>${t("count","Count")}<input id="count" type="number" min="1" max="100" value="5"></label><div class="result" id="result" style="white-space:pre-wrap">—</div><div class="actions"><button class="btn primary" id="go">${t("generate","Generate")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button></div>`;
 bind(slug);
}
function bind(slug){
 if(slug==="image-resizer") $("#go").onclick=async()=>{const f=$("#file").files[0],s=$("#status");if(!f)return s.textContent=t("choose_first","Choose a file first.");const w=Math.max(1,Math.min(8192,+$("#w").value)),h=Math.max(1,Math.min(8192,+$("#h").value));const i=await readImage(f),c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(i,0,0,w,h);const b=await canvasBlob(c);blobDownload(b,`${baseName(f.name)}-${w}x${h}.png`);s.textContent=`${w} × ${h} • ${(b.size/1048576).toFixed(2)} MB`};
 if(slug==="image-compressor"){
  const q=$("#q"),ql=$("#ql"),fmt=$("#fmt"),status=$("#status"),result=$("#result");

  const syncQuality=()=>{
    const png=fmt.value==="image/png";
    q.disabled=png;
    ql.textContent=png?t("png_lossless","Lossless PNG"):q.value+"%";
  };

  q.oninput=syncQuality;
  fmt.onchange=syncQuality;
  syncQuality();

  $("#go").onclick=async()=>{
    const f=$("#file").files[0];
    result.hidden=true;
    result.innerHTML="";

    if(!f){
      status.textContent=t("choose_first","Choose a file first.");
      return;
    }

    if(f.size>50*1024*1024){
      status.textContent=t("file_too_large","The selected file is too large. Maximum: 50 MB.");
      return;
    }

    status.textContent=t("processing","Processing…");

    try{
      const i=await readImage(f);
      const pixels=i.width*i.height;

      if(i.width>8192||i.height>8192||pixels>40000000){
        status.textContent=t("image_too_large","The image is too large to process safely. Maximum: 40 megapixels.");
        return;
      }

      const c=document.createElement("canvas");
      c.width=i.width;
      c.height=i.height;

      const x=c.getContext("2d");
      const type=fmt.value;

      if(type==="image/jpeg"){
        x.fillStyle="#fff";
        x.fillRect(0,0,c.width,c.height);
      }

      x.drawImage(i,0,0);

      const quality=type==="image/png"?1:(+q.value/100);
      const b=await canvasBlob(c,type,quality);

      const ext=
        type==="image/png"?"png":
        type==="image/webp"?"webp":
        "jpg";

      const saved=((f.size-b.size)/f.size)*100;
      const savedText=Math.abs(saved).toFixed(1)+"%";

      const formatName=
        type==="image/png"?"PNG":
        type==="image/webp"?"WebP":
        "JPG";

      result.innerHTML=
        `<div class="metrics">`+
        metric(t("original_size","Original size"),formatBytes(f.size))+
        metric(t("output_size","Output size"),formatBytes(b.size))+
        metric(saved>=0?t("savings","Savings"):t("size_increase","Size increase"),savedText)+
        metric(t("resolution","Resolution"),`${i.width} × ${i.height}`)+
        `</div>`+
        `<div class="metrics">`+
        metric(t("output_format","Output format"),formatName)+
        `</div>`+
        (saved<0?`<p>${type==="image/png"?t("png_larger","Lossless PNG can be larger than the original. Choose WebP or JPG for a smaller file."):t("output_larger","The output is larger than the original. Try WebP/JPG or reduce quality.")}</p>`:"")+
        (type==="image/jpeg"?`<p>${t("jpeg_white","JPG does not support transparency. If the image contains transparent areas, they are filled with white.")}</p>`:"")+
        (type==="image/png"?`<p>${t("png_lossless_note","PNG is lossless, so the quality slider is not used.")}</p>`:"");

      result.hidden=false;
      status.textContent=t("done","Done");

      blobDownload(
        b,
        `${baseName(f.name)}-compressed.${ext}`
      );
    }
    catch(e){
      console.error("[Noreqia][image-compressor]",e);
      status.textContent=t("encode_error","The image could not be processed.");
    }
  };
}

 if(slug==="image-converter") $("#go").onclick=async()=>{const f=$("#file").files[0],s=$("#status");if(!f)return s.textContent=t("choose_first","Choose a file first.");const i=await readImage(f),c=document.createElement("canvas");c.width=i.width;c.height=i.height;const x=c.getContext("2d"),type=$("#fmt").value;if(type==="image/jpeg"){x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height)}x.drawImage(i,0,0);const b=await canvasBlob(c,type,.92),ext=type.includes("png")?"png":type.includes("webp")?"webp":"jpg";blobDownload(b,`${baseName(f.name)}.${ext}`);s.textContent=t("done","Done")};
 if(slug==="word-counter"){const a=$("#actions"),r=$("#result"),tx=$("#text");a.innerHTML=`<button class="btn secondary" id="clear">${t("clear","Clear")}</button>`;const up=()=>{const s=tx.value,w=s.trim()?s.trim().split(/\s+/).length:0,se=s.trim()?((s.match(/[.!?]+(?:\s|$)/g)||[]).length||1):0;r.innerHTML=`<div class="metrics">${metric(t("words","Words"),w)}${metric(t("characters","Characters"),s.length)}${metric(t("sentences","Sentences"),se)}${metric(t("read_time","Read time"),w?Math.max(1,Math.ceil(w/200))+" min":"0 min")}</div>`};tx.oninput=up;$("#clear").onclick=()=>{tx.value="";up()};up()}
 if(slug==="character-counter"){const a=$("#actions"),r=$("#result"),tx=$("#text");a.innerHTML=`<button class="btn secondary" id="clear">${t("clear","Clear")}</button>`;const up=()=>{const s=tx.value;r.innerHTML=`<div class="metrics">${metric(t("characters","Characters"),s.length)}${metric(t("no_spaces","Without spaces"),s.replace(/\s/g,"").length)}${metric(t("lines","Lines"),s?s.split(/\r?\n/).length:0)}</div>`};tx.oninput=up;$("#clear").onclick=()=>{tx.value="";up()};up()}
 if(slug==="case-converter"){
  const a=$("#actions"),r=$("#result"),tx=$("#text");
  const cl=CASE_I18N[CURRENT_LANG]||CASE_I18N.en;

  a.innerHTML=
    `<button class="btn primary" data-case="upper">${cl.upper}</button>`+
    `<button class="btn secondary" data-case="lower">${cl.lower}</button>`+
    `<button class="btn secondary" data-case="title">${cl.title}</button>`+
    `<button class="btn secondary" data-case="sentence">${cl.sentence}</button>`+
    `<button class="btn secondary" id="copy">${t("copy","Copy")}</button>`;

  $$("[data-case]",a).forEach(b=>b.onclick=()=>{
    let value=tx.value;
    const mode=b.dataset.case;

    const lower=v=>
      v.toLocaleLowerCase(CURRENT_LANG);

    if(mode==="upper"){
      value=value.toLocaleUpperCase(CURRENT_LANG);
    }

    if(mode==="lower"){
      value=lower(value);
    }

    if(mode==="title"){
      value=lower(value).replace(
        /(^|[^\p{L}\p{N}])(\p{L})/gu,
        (m,p,c)=>p+c.toLocaleUpperCase(CURRENT_LANG)
      );
    }

    if(mode==="sentence"){
      value=lower(value).replace(
        /(^|[.!?]\s+|\n+)(\p{L})/gu,
        (m,p,c)=>p+c.toLocaleUpperCase(CURRENT_LANG)
      );
    }

    r.textContent=value;
  });

  $("#copy").onclick=()=>
    copyText(r.textContent);
}

 if(slug==="duplicate-line-remover"){const a=$("#actions"),r=$("#result"),tx=$("#text");a.innerHTML=`<button class="btn primary" id="go">${t("clean","Clean")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button>`;$("#go").onclick=()=>{const seen=new Set();r.textContent=tx.value.split(/\r?\n/).filter(x=>{const k=x.trim();if(seen.has(k))return false;seen.add(k);return true}).join("\n")};$("#copy").onclick=()=>copyText(r.textContent)}
 if(slug==="whitespace-cleaner"){const a=$("#actions"),r=$("#result"),tx=$("#text");a.innerHTML=`<button class="btn primary" id="go">${t("clean","Clean")}</button><button class="btn secondary" id="copy">${t("copy","Copy")}</button>`;$("#go").onclick=()=>{r.textContent=tx.value.replace(/[ \t]+/g," ").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n").trim()};$("#copy").onclick=()=>copyText(r.textContent)}
 if(slug==="password-generator"){const len=$("#len"),out=$("#result");len.oninput=()=>$("#ll").textContent=len.value;const go=()=>{const ch="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*_-+",a=new Uint32Array(+len.value);crypto.getRandomValues(a);out.textContent=[...a].map(v=>ch[v%ch.length]).join("")};$("#go").onclick=go;$("#copy").onclick=()=>copyText(out.textContent);go()}
 if(slug==="random-number"){
  $("#go").onclick=()=>{
    let a=Math.ceil(Number($("#min").value));
    let b=Math.floor(Number($("#max").value));

    if(b<a){
      [a,b]=[b,a];
    }

    const value=secureRandomInt(a,b);

    $("#result").textContent=
      value===null?"—":String(value);
  };
}
 if(slug==="percentage-calculator") $("#go").onclick=()=>{const a=+$("#value").value,b=+$("#total").value;$("#result").textContent=b?((a/b)*100).toLocaleString(undefined,{maximumFractionDigits:4})+"%":"—"};
 if(slug==="age-calculator") $("#go").onclick=()=>{const d=new Date($("#birth").value+"T00:00:00"),n=new Date();if(isNaN(d)||d>n)return $("#result").textContent="—";let y=n.getFullYear()-d.getFullYear(),m=n.getMonth()-d.getMonth();if(m<0||(m===0&&n.getDate()<d.getDate()))y--;$("#result").textContent=y+" "+t("years","years")};
 if(slug==="date-difference") $("#go").onclick=()=>{const a=new Date($("#a").value+"T00:00:00"),b=new Date($("#b").value+"T00:00:00");if(isNaN(a)||isNaN(b))return $("#result").textContent="—";const days=Math.round(Math.abs(b-a)/86400000);$("#result").textContent=days.toLocaleString()+" "+t("days","days")};
 if(slug==="length-converter"){const units={m:1,km:1000,cm:.01,mm:.001,mi:1609.344,yd:.9144,ft:.3048,in:.0254};for(const id of ["from","to"])for(const u of Object.keys(units))$(id==="#from"?id:"#"+id);$("#from").innerHTML=Object.keys(units).map(u=>`<option>${u}</option>`).join("");$("#to").innerHTML=Object.keys(units).map(u=>`<option>${u}</option>`).join("");$("#from").value="m";$("#to").value="ft";$("#go").onclick=()=>{$("#result").textContent=((+$("#value").value*units[$("#from").value])/units[$("#to").value]).toLocaleString(undefined,{maximumFractionDigits:8})+" "+$("#to").value}}
 if(slug==="qr-code-generator"){const draw=()=>{const s=$("#qrtext").value.trim(),q=$("#qr"),st=$("#status");if(!s)return st.textContent=t("enter_value","Enter a value.");if(typeof QRCode==="undefined")return st.textContent=t("qr_error","QR library could not load.");q.innerHTML="";new QRCode(q,{text:s,width:210,height:210});st.textContent=t("done","Done")};$("#go").onclick=draw;$("#download").onclick=()=>{const c=$("#qr canvas"),i=$("#qr img"),src=c?c.toDataURL("image/png"):i?.src;if(!src)return;const a=document.createElement("a");a.href=src;a.download="noreqia-qr.png";a.click()};setTimeout(draw,100)}
 if(slug==="color-converter"){const prev=$("#preview"),st=$("#status");const setPrev=c=>prev.style.background=c;$("#hex2rgb").onclick=()=>{let h=$("#hex").value.trim().replace("#","");if(h.length===3)h=h.split("").map(x=>x+x).join("");if(!/^[0-9a-f]{6}$/i.test(h))return st.textContent=t("invalid","Invalid value.");const n=parseInt(h,16),r=n>>16,g=n>>8&255,b=n&255;$("#rgb").value=`${r}, ${g}, ${b}`;setPrev("#"+h);st.textContent=t("done","Done")};$("#rgb2hex").onclick=()=>{const p=$("#rgb").value.split(",").map(x=>+x.trim());if(p.length!==3||p.some(x=>!Number.isFinite(x)||x<0||x>255))return st.textContent=t("invalid","Invalid value.");const h="#"+p.map(x=>Math.round(x).toString(16).padStart(2,"0")).join("");$("#hex").value=h;setPrev(h);st.textContent=t("done","Done")};setPrev($("#hex").value)}
 if(slug==="json-formatter"){const tx=$("#text"),st=$("#status");$("#format").onclick=()=>{try{tx.value=JSON.stringify(JSON.parse(tx.value),null,2);st.textContent=t("valid_json","Valid JSON")}catch(e){st.textContent=e.message}};$("#minify").onclick=()=>{try{tx.value=JSON.stringify(JSON.parse(tx.value));st.textContent=t("valid_json","Valid JSON")}catch(e){st.textContent=e.message}};$("#copy").onclick=()=>copyText(tx.value)}
 if(slug==="base64-converter"){
  const tx=$("#text"),st=$("#status");

  $("#encode").onclick=()=>{
    try{
      tx.value=utf8ToBase64(tx.value);
      st.textContent=t("done","Done");
    }catch(e){
      console.error("[Noreqia][base64-encode]",e);
      st.textContent=t("invalid","Invalid value.");
    }
  };

  $("#decode").onclick=()=>{
    try{
      tx.value=base64ToUtf8(tx.value);
      st.textContent=t("done","Done");
    }catch(e){
      console.error("[Noreqia][base64-decode]",e);
      st.textContent=t("invalid","Invalid value.");
    }
  };

  $("#copy").onclick=()=>
    copyText(tx.value);
}

 if(slug==="url-encoder-decoder"){const tx=$("#text"),st=$("#status");$("#encode").onclick=()=>{tx.value=encodeURIComponent(tx.value);st.textContent=t("done","Done")};$("#decode").onclick=()=>{try{tx.value=decodeURIComponent(tx.value);st.textContent=t("done","Done")}catch{st.textContent=t("invalid","Invalid value.")}};$("#copy").onclick=()=>copyText(tx.value)}
 if(slug==="uuid-generator"){const out=$("#result"),gen=()=>{const n=Math.max(1,Math.min(100,+$("#count").value||1));out.textContent=Array.from({length:n},()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const r=crypto.getRandomValues(new Uint8Array(1))[0]&15,v=c==="x"?r:(r&3)|8;return v.toString(16)})).join("\n")};$("#go").onclick=gen;$("#copy").onclick=()=>copyText(out.textContent);gen()}
}
document.addEventListener("DOMContentLoaded",render);
