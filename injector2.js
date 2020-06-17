function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\\+/g, ' '));
}

var styleHover= document.createElement("style");
styleHover.id="styleHover";
styleHover.innerHTML='@media screen and (max-width: 600px) { #outbrainDiv1{ overflow: scroll; max-height:250px; }}button.ob_injector{overflow:hidden;}button.ob_injector:focus{outline:none !important;}button.ob_injector span { cursor: pointer; display: inline-block; position: relative; transition: 0.5s;}button.ob_injector span:after { content: " >> "; position: absolute; opacity: 0; top: 0; right: -20px; transition: 0.5s; top: 50%; transform: translateY(-50%);}button.ob_injector:hover span { padding-right: 25px;}button.ob_injector:hover span:after { opacity: 1; right: 0; } .alert_Widget{font-size: 20px; font-weight: bold; font-family: Patua One, cursive; margin: 0 auto; text-align: center; } .hover_ob,.hover_ob2{position:relative;opacity:0.9;}.hover_ob:after{opacity:1;width:100%;height:100%;top:0px;left:0px;position:absolute;z-index:-1;content:"";border-radius:5px;border:4px dashed red !important;background-color: #fbb034;background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%) !important;cursor: pointer;box-sizing:border-box; padding:5px !important;}.hover_ob2:after{opacity:1;width:100%;height:100%;top:0px;left:0px;position:absolute;z-index:-1;content:"";border-radius:5px;border:4px dashed blue !important;background-color: #fbb034;background-color: #f6fba2;background-image: linear-gradient(315deg, #f6fba2 0%, #20ded3 74%)!important;cursor: pointer;box-sizing:border-box; padding:5px !important;}input[type="radio"]{margin-right:5px !important; margin-top:10px !important;}';
  document.getElementsByTagName("body")[0].appendChild(styleHover); 
var getPermalink=window.location.href;
var queryString;
var urlParams;
var widgetId;
var isGallery;
var Ob_Widgets=[];var Ob_Widgets2=[];Ob_Widgets3=[];
var counter=0;
var elems = document.body.getElementsByTagName("*");
for(i=0;i<elems.length;i++){
elems[i].removeAttribute("href");
elems[i].removeAttribute("onclick");}
var a=document.getElementById("addWidget");
var b=document.getElementById("closebtn");
if(a!=null){
  a.setAttribute("onclick","GetValues(ob_q)");
}
if(b!=null){
  b.setAttribute("onclick","CloseWindow()");
}

function GetParams(){
widgetId = getParameterByName("widgetId");
if(widgetId!=null){
Ob_Widgets=widgetId.split(",");
}
console.log(Ob_Widgets);
console.log(Ob_Widgets[0]);
isGallery = getParameterByName("isGallery");
console.log(isGallery);
if(isGallery==null){
    isGallery=0;
}
if(Ob_Widgets.length>0){

if(isGallery==0 || isGallery=="false"){

document.getElementById("defaultPRM").checked=true;
}
else{
    
    document.getElementById("tamsPRM").checked=true;
}
    document.getElementById("widgetToInject").value=Ob_Widgets[0];
    document.getElementById("innerSelectionDiv").style.display="none";  
    document.getElementById("innerSelectionDiv2").style.display="none";  
}
}
function ChooseNew(a){
dragElement(document.getElementById("outbrainDiv1"));
var elems2= document.getElementsByClassName("hover_ob2");
if(elems2.length!=0){
elems2[0].classList.remove("hover_ob2");};

window.onmouseover=function(e) {
if(!e.target.classList.contains("ob_injector")){
        e.target.classList.add("hover_ob");
     }
};
window.onmouseout=function(e) {
if(!e.target.classList.contains("ob_injector")){
        e.target.classList.remove("hover_ob");
}};  
document.onclick=function(e) {
  if(!e.target.classList.contains("ob_injector")){
     ob_q=e.target;
       e.target.classList.add("hover_ob2");
       window.onmouseover=null;
       document.onclick=null;
}} ;
};
var ob_q;
function GetValues(element){
 if(element.classList.contains("hover_ob2")){element.classList.remove("hover_ob2");}
var obPermalink;var permalinks = document.getElementsByName("url");
for (var i = 0, length = permalinks.length; i < length; i++)
  {
    if(permalinks[i].checked)
      {
        let cp;
        cp=document.getElementById("CustomPermalink");
        if(permalinks[i].id=="customPRM"){
          obPermalink=cp.getAttribute("data-src");
        }
        else{
        obPermalink=permalinks[i].value;
        }
        break;
      }
        ;
      }
      
       var outbrainDiv = document.createElement("div");outbrainDiv.style.clear="both";outbrainDiv.style.margin="15px 0px";var widget=document.getElementById("widgetToInject").value;outbrainDiv.id="OBouter"+counter;outbrainDiv.innerHTML=`<div class="OUTBRAIN" data-ob-test="true" data-src="${obPermalink}" data-widget-id="${widget}"></div> <script type="text/javascript" async="async" src="//widgets.outbrain.com/outbrain.js"></script>`;Ob_Widgets3.push(outbrainDiv.innerHTML);counter++;
       var locations = document.getElementsByName("inOrOut");
for (var i = 0, length = locations.length; i < length; i++)
  {
    if(locations[i].checked){
      if(locations[i].value==0){
        element.innerHTML="";
        element.appendChild(outbrainDiv);
        }
        else if(locations[i].value==1){
      element.insertBefore(outbrainDiv, element.firstChild);
        }
        else{
        element.appendChild(outbrainDiv);
        }
        break;
      };}
OBR.extern.researchWidget();dragElement(document.getElementById("outbrainDiv1"));if(Ob_Widgets.length==0&& document.getElementById("alertWidgets")!=null){document.getElementById("alertWidgets").style.display="none";}if(Ob_Widgets.length>0 && document.getElementById("alertWidgets")!=null){document.getElementById("alertWidgets").innerHTML=`<p class="alert_Widget ob_injector">Select the position of ${Ob_Widgets[0]}</p>`;document.getElementById("widgetToInject").value=Ob_Widgets[0];ChooseNew();Ob_Widgets2.push(Ob_Widgets.shift());}}function CloseWindow(){var closeHover=document.getElementById("styleHover");
if(closeHover!=null){closeHover.remove();};var x=document.getElementById("outbrainDiv1");document.body.removeChild(x);}var script2=document.createElement("script");script2.type='text/javascript';script2.async='async';script2.src='//widgets.outbrain.com/outbrain.js';document.body.appendChild(script2);var outbrainDiv1 = document.createElement("div");outbrainDiv1.id="outbrainDiv1";outbrainDiv1.classList.add("ob_injector");outbrainDiv1.style.direction='ltr';outbrainDiv1.style.width='285px';outbrainDiv1.style.height='max-content';outbrainDiv1.style.position='fixed';outbrainDiv1.style.backgroundColor='#EF8421';outbrainDiv1.style.bottom='10%';outbrainDiv1.style.right='0px';outbrainDiv1.style.zIndex='99999999';outbrainDiv1.style.color='rgb(51, 63, 72) !important';outbrainDiv1.style.fontSize='14px';outbrainDiv1.style.fontFamily='"Patua One", cursive';outbrainDiv1.style.fontWeight='bold';outbrainDiv1.style.border='4px solid rgb(51, 63, 72)';outbrainDiv1.style.borderRadius='8px';outbrainDiv1.style.maxWidth='330px';outbrainDiv1.innerHTML=`<link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet"><div class="ob_injector" style="position:relative;width:90%;height:90%;margin:0 auto;"><h1  class="ob_injector" style="text-align: left;text-decoration: underline;color:rgb(51, 63, 72) !important;margin:5px 0px 0px 0px;font-family:Patua One, cursive; font-size:18px;position:relative;line-height:18px">Widget Injector<span id="OBamelia" class="ob_injector" style="background: url(https://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16@2x.png) no-repeat center top;width: 30px;height: 50px;margin-bottom: -2px;background-size: 30px 50px;position: absolute;top: 0px;right: 0px;"></span></h1><div class="ob_injector" style="text-align: left;position:relative; top:6px; width:100%;"><div class="ob_injector"  id="innerSelectionDiv" style="width:100%;height:max-content;"><br><input checked class="ob_injector" onchange="dis()" type="radio" id="defaultPRM" name="url" value="${getPermalink}"><label class="ob_injector" for="defaultPRM" style="color: rgb(51, 63, 72)">Default Permalink</label><br><input class="ob_injector" onchange="dis()" type="radio" id="tamsPRM" name="url" value="http://tams.outbrain.com/widgetGallery/"><label class="ob_injector" for="tamsPRM" style="color: rgb(51, 63, 72)">Widget Gallery Permalink</label><br><input onchange="dis()" class="ob_injector" type="radio" id="customPRM" name="url" value=""><label class="ob_injector" for="customPRM" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Custom Permalink</label><br><input  placeholder="Insert permalink" onchange="ob_val()" value="" data-src="${getPermalink}" class="ob_injector" style="font-size: 13px;letter-spacing: 0.8px;text-indent: 5px;text-transform:uppercase;margin-top: 10px;display:none;border: 2px solid rgb(51, 63, 72)!important;border-radius: 8px;width:100%;font-family:Patua One, cursive; font-weight:bold" type="text" id="CustomPermalink" name="CustomPermalink"><label class="ob_injector"  style="display:none;margin-bottom: 10px;" for="positionSelector">Position Selector:</label><input class="ob_injector"   style="display:none; width:100%;font-family:Patua One, cursive;font-size:16px; font-weight:bold" type="text" id="positionSelector" name="positionSelector"><label class="ob_injector" style="color: rgb(51, 63, 72);margin: 10px 0px; display: block;" for="widgetToInject">Widget To Inject:</label><input placeholder="Insert widegt ID" class="ob_injector" style="font-size: 13px;letter-spacing: 0.8px;text-indent: 5px;text-transform:uppercase;border: 2px solid rgb(51, 63, 72)!important;border-radius: 8px;width:100%;font-family:Patua One, cursive;font-weight:bold" type="text" id="widgetToInject" name="widgetToInject"><br><br></div>
<span class="ob_injector" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Position:</span>
<div class="ob_injector" style="display:flex;justify-content:space-between;">
<span class="ob_injector"><input checked class="ob_injector" type="radio" id="aboveContent" name="inOrOut" value="1"><label class="ob_injector" for="aboveContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Above </label></span>
<span class="ob_injector"><input  class="ob_injector" type="radio" id="inContent" name="inOrOut" value="0"><label class="ob_injector" for="inContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">In</label></span>
<span class="ob_injector"><input  class="ob_injector" type="radio" id="belowContent" name="inOrOut" value="-1"><label class="ob_injector" for="belowContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Below</label></span>
</div><br>
<button   class="ob_injector"  id="addWidget" style="border:2px solid rgb(51, 63, 72)!important;border-radius:8px;color:rgb(51, 63, 72)!important; height:60px;width: 44%;background-color: #EF8421;font-family: Patua One, cursive;font-size: 14px;font-weight: bold;" onclick="GetValues(ob_q)"><span class="ob_injector">Add widget</span></button><button  class="ob_injector"  id="chooseNew" style="padding:6px;line-height:1.2;vertical-align: top;border:2px solid rgb(51, 63, 72)!important;border-radius:8px;margin-left:10%;height:60px;width: 44%;background-color: #EF8421;font-family:Patua One, cursive;font-size: 14px;font-weight: bold;color:rgb(51, 63, 72)!important" onclick="ChooseNew()"><span class="ob_injector">Choose Another Location</span></button></div><br><button  class="ob_injector"  id=""reloadWidget" style="margin:15px auto; border:2px solid rgb(51, 63, 72)!important;border-radius:8px;width: 100%;background-color: #EF8421;font-family:Patua One, cursive;font-size: 14px;font-weight: bold;float: right;color:rgb(51, 63, 72) !important" onclick="ReloadWidget(ob_q)"><span class="ob_injector">Reload Widget</span></button><br><div class="ob_injector"  id="innerSelectionDiv2" style="width:100%;height:max-content;"><button onclick="Ob_computedCss(ob_q)" style="margin:15px auto; border:2px solid rgb(51, 63, 72)!important;border-radius:8px;width: 100%;background-color: #EF8421;font-family:Patua One, cursive;font-size: 14px;font-weight: bold;float: right;color:rgb(51, 63, 72) !important">Get computed CSS</button></div><button  class="ob_injector"  id="closebtn" style="margin:15px auto; border:2px solid rgb(51, 63, 72)!important;border-radius:8px;width: 100%;background-color: #EF8421;font-family:Patua One, cursive;font-size: 14px;font-weight: bold;float: right;color:rgb(51, 63, 72) !important" onclick="CloseWindow()"><span class="ob_injector">Close Window</span></button>`;document.body.appendChild(outbrainDiv1); GetParams();
var alert=document.createElement("div");
alert.style.width="25%";
alert.style.height="max-content";
alert.style.backgroundColor="rgba(244, 67, 54, .87)";
alert.style.color=" #EFF1F1";
alert.style.position="fixed"; 
alert.style.left="10px";
alert.style.bottom="10px";
alert.style.border="1px solid #d2d3d3";
alert.style.zIndex="999999999";
alert.style.padding="1%";
alert.id="alertWidgets";
alert.classList.add("ob_injector");
if(Ob_Widgets.length>0){
alert.innerHTML=`<p class="alert_Widget ob_injector" >Select the position of ${Ob_Widgets[0]}</p>`;
document.body.appendChild(alert);
Ob_Widgets2.push(Ob_Widgets.shift());
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("OBamelia")) {
  
    document.getElementById("OBamelia").onmousedown = dragMouseDown;
  } else {
  
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
dragElement(document.getElementById("outbrainDiv1"));
function ReloadWidget(e){
dragElement(document.getElementById("outbrainDiv1"));
var elems3;
for(let i=0;i<Ob_Widgets3.length;i++){
e=document.getElementById("OBouter"+i);
e.innerHTML="";
e.innerHTML=Ob_Widgets3[i];
}
OBR.extern.reloadWidget();
elems3 = document.getElementsByClassName("hover_ob");
if(elems3.length!=0){
for(i=0;i<elems3.length;i++){
  elems3[i].classList.remove("hover_ob");};
}
window.onmouseover=null;
window.onmouseout=null;
document.onclick=null;
}
function dis(){
var cprm=document.getElementById("customPRM");
var cprmInput=document.getElementById("CustomPermalink");
  if(cprm.checked){
  cprmInput.style.display="block";
    }
    else{
cprmInput.setAttribute("data-src",window.location.href);
    cprmInput.style.display="none";
    }
};
function Ob_computedCss(element_css){
  let ob_compStyles = window.getComputedStyle(element_css);
   console.log("The computed CSS:");
   console.log("**********************");
   console.log("****** Font CSS ******");
   console.log("**********************");
   console.log("font-size:" + ob_compStyles.getPropertyValue("font-size")+";");
   console.log("font-family:" + ob_compStyles.getPropertyValue("font-family")+";");
   console.log("font-weight:" + ob_compStyles.getPropertyValue("font-weight")+";");
   console.log("letter-spacing:" + ob_compStyles.getPropertyValue("letter-spacing")+";");
   console.log("color:" + ob_compStyles.getPropertyValue("color")+";");
   console.log("***************************");
   console.log("****** Container CSS ******");
   console.log("***************************");
   console.log("background-color:" + ob_compStyles.getPropertyValue("background-color")+";");
   console.log("margin:" + ob_compStyles.getPropertyValue("margin")+";");
   console.log("padding:" + ob_compStyles.getPropertyValue("padding")+";");
   console.log("width:" + ob_compStyles.getPropertyValue("width")+";");
   console.log("height:" + ob_compStyles.getPropertyValue("height"));
   console.log("min-width:" + ob_compStyles.getPropertyValue("min-width")+";");
   console.log("min-height:" + ob_compStyles.getPropertyValue("min-height")+";");
   console.log("background-image:" + ob_compStyles.getPropertyValue("background-image")+";");
   console.log("background:" + ob_compStyles.getPropertyValue("background")+";");
   console.log("background-size:" + ob_compStyles.getPropertyValue("background-size")+";");
   console.log("opacity:" + ob_compStyles.getPropertyValue("opacity")+";");
   console.log("border:" + ob_compStyles.getPropertyValue("border")+";");
   console.log("position:" + ob_compStyles.getPropertyValue("position")+";");
   console.log("display:" + ob_compStyles.getPropertyValue("display")+";");
   console.log("box-shadow:" + ob_compStyles.getPropertyValue("box-shadow")+";");
   console.log("top:" + ob_compStyles.getPropertyValue("top")+";");
   console.log("bottom:" + ob_compStyles.getPropertyValue("bottom")+";");
   console.log("left:" + ob_compStyles.getPropertyValue("left")+";");
   console.log("right:" + ob_compStyles.getPropertyValue("right")+";");
}

function ob_val(){
var cprmInput=document.getElementById("CustomPermalink");
cprmInput.setAttribute("data-src",cprmInput.value);
};

ChooseNew();






