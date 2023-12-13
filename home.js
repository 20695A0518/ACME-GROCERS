var rec='<?xml version="1.0" encoding="UTF-8"?><records><record><sln>1</sln><prodcode>P001</prodcode><prodname>Atta - 1kg</prodname><price>270</price><vat>3</vat></record><record><sln>2</sln><prodcode>P002</prodcode><prodname>Basmati rice - 1kg</prodname><price>96</price><vat>1</vat></record><record><sln>3</sln><prodcode>P003</prodcode><prodname>Daawat Brown rice - 1kg</prodname><price>150</price><vat>2</vat></record><record><sln>4</sln><prodcode>P004</prodcode><prodname>Soya Beans - 1kg</prodname><price>135</price><vat>2</vat></record><record><sln>5</sln><prodcode>P005</prodcode><prodname>Bansi Sooji - 1kg</prodname><price>32</price><vat>1</vat></record><record><sln>6</sln><prodcode>P006</prodcode><prodname>Dabur Honey - 1kg</prodname><price>400</price><vat>5</vat></record><record><sln>7</sln><prodcode>P007</prodcode><prodname>BRU - 500 g</prodname><price>250</price><vat>3</vat></record><record><sln>8</sln><prodcode>P008</prodcode><prodname>Mysore Sandal 450g(pack of 3)</prodname><price>232</price><vat>3</vat></record><record><sln>9</sln><prodcode>P009</prodcode><prodname>Doodh Peda - 200g</prodname><price>114</price><vat>2</vat></record><record><sln>10</sln><prodcode>P010</prodcode><prodname>Kaju Katri - 200g</prodname><price>190</price><vat>2</vat></record><record><sln>11</sln><prodcode>P011</prodcode><prodname>Fresh Sapota - 500g</prodname><price>52</price><vat>1</vat></record><record><sln>12</sln><prodcode>P012</prodcode><prodname>Halwa Bits - 200g</prodname><price>80</price><vat>1</vat></record><record><sln>13</sln><prodcode>P013</prodcode><prodname>Cadbury Chocolate-59.8g</prodname><price>45</price><vat>1</vat></record><record><sln>14</sln><prodcode>P014</prodcode><prodname>Shave Foam - 418g</prodname><price>211</price><vat>3</vat></record><record><sln>15</sln><prodcode>P015</prodcode><prodname>Venus Razor</prodname><price>75</price><vat>1</vat></record><record><sln>16</sln><prodcode>P016</prodcode><prodname>Colgate - 500g</prodname><price>220</price><vat>3</vat></record><record><sln>17</sln><prodcode>P017</prodcode><prodname>Dettol</prodname><price>165</price><vat>2</vat></record><record><sln>18</sln><prodcode>P018</prodcode><prodname>Pears Pure - 450ml</prodname><price>101</price><vat>2</vat></record><record><sln>19</sln><prodcode>P019</prodcode><prodname>Safari Suitcase Trolleys 55cms</prodname><price>1699</price><vat>10</vat></record><record><sln>20</sln><prodcode>P020</prodcode><prodname>Bata Mens Shoe</prodname><price>550</price><vat>6</vat></record><record><sln>21</sln><prodcode>P021</prodcode><prodname>Onion - 500g</prodname><price>28</price><vat>1</vat></record><record><sln>22</sln><prodcode>P022</prodcode><prodname>Coconut 1 unit</prodname><price>23</price><vat>1</vat></record><record><sln>23</sln><prodcode>P023</prodcode><prodname>Potato Agra 1kg</prodname><price>30</price><vat>1</vat></record><record><sln>24</sln><prodcode>P024</prodcode><prodname>Garlic 250g</prodname><price>70</price><vat>1</vat></record><record><sln>25</sln><prodcode>P025</prodcode><prodname>Mushroom Button 200g</prodname><price>39</price><vat>1</vat></record><record><sln>26</sln><prodcode>P026</prodcode><prodname>Tomato 1kg</prodname><price>34</price><vat>1</vat></record><record><sln>27</sln><prodcode>P027</prodcode><prodname>Banana Robusta 500g</prodname><price>19</price><vat>1</vat></record><record><sln>28</sln><prodcode>P028</prodcode><prodname>Cucumber Local 500g</prodname><price>15</price><vat>1</vat></record><record><sln>29</sln><prodcode>P029</prodcode><prodname>Ginger 250g</prodname><price>30</price><vat>1</vat></record><record><sln>30</sln><prodcode>P030</prodcode><prodname>Broccoli 1 Unit</prodname><price>28</price><vat>1</vat></record></records>'
var ssln=[]
var spc=[]
var spn=[]
var sp=[]
var sq=[]
var stp=[]
var gst=[]
var cmax=0


// localStorage.setItem("hello","uuuu")

function addProduct(){
    var cpc=document.getElementById("IPC").value;
    var cpq=document.getElementById("Quant").value;
    var table=`<tr><th>SNo.</th><th class="productNmae">Product Name</th><th>Quantity</th><th>Unit Price </th><th> VAT (&#8377;)  </th><th>Price</th></tr>`;
    var xmlhttp = new DOMParser();
    var myXmlDoc =xmlhttp.parseFromString(rec,"text/xml");
    var x=myXmlDoc.getElementsByTagName("record");
    //  console.log(x[0].childNodes[1].firstChild.nodeValue == cpc);
    // console.log(cmax);
    if(cpq>0)
    for(i=0;i<x.length;i++){
        if((x[i].childNodes[1].firstChild.nodeValue) == cpc){
            if(spc.includes(cpc)){
                var n=spc.indexOf(cpc);
                sq[n]+=parseInt(cpq);
                gst[n]=parseFloat(stp[n]*(x[i].childNodes[4].firstChild.nodeValue/100)).toFixed(2)
                stp[n]=parseInt(sq[n])*parseInt(sp[n])+parseFloat(gst[(gst.length)-1]);
                // console.log("subadd");
                // console.log(stp);
            }
            else{
                if(cmax<5){
                    ssln[ssln.length]=x[i].childNodes[0].firstChild.nodeValue;
                    spc[spc.length]=x[i].childNodes[1].firstChild.nodeValue;
                    spn[spn.length]=x[i].childNodes[2].firstChild.nodeValue;
                    sp[sp.length]=parseInt(x[i].childNodes[3].firstChild.nodeValue);
                    sq[sq.length]=parseInt(cpq);
                    gst[gst.length]=parseFloat(parseInt(cpq)*(parseFloat(sp[(sp.length)-1])*x[i].childNodes[4].firstChild.nodeValue)/100).toFixed(2);
                    // console.log(gst);
                    stp[stp.length]=(parseFloat(cpq)*parseFloat(sp[(sp.length)-1]))+parseFloat(gst[(gst.length)-1]);
                    
                    cmax++;
                    // console.log("added"+ cmax);
                    
                }
                else{
                    document.getElementById("errmess").innerHTML="Maximum No. of Products added "
                    // console.log(cmax);
                }
            }

            for(j=0;j<cmax;j++){
                        table+='<tr><td>'+(j+1)+'</td><td class="productNmae">'+spn[j]+'</td><td>'+sq[j]+'</td><td>'+sp[j] +'</td><td>'+gst[j]+'</td><td>'+stp[j]+'</td></tr>';
            }
            var total=0;
            stp.forEach(s=>{
                total+=parseFloat(s);
            })
            
            var qt=0;
            sq.forEach(s=>{
                qt+=parseInt(s);
            })
            var up=0;
            sp.forEach(s=>{
                up+=parseInt(s);
            })
            var vt=0;
            gst.forEach(s=>{
                vt+=parseFloat(s);
            })
            localStorage.setItem('vat',vt);
            localStorage.setItem('qunt',qt);
            localStorage.setItem('tot',Math.round(total));
            table+='<tr><td colspan=6></td></tr>'+'<tr><td colspan=2>'+'TOTAL'+'</td><td> '+qt+' </td><td> '+up+' </td> <td> '+vt.toFixed(2)+' </td><td id="tol">'+Math.round(total) +'</td></tr><tr><td colspan=6></td></tr>'
            document.getElementById("table1").innerHTML=table;
        }
        // else{
        //     document.getElementById("proderr").innerHTML='Product Code is not available'
        // }
    }
    
}
function close1(){
    location.href="Login.html"
    sessionStorage.clear()
}

function billGen(){
    if(spc.length<=0){
        // alert("");
        return;
    }
    
    var res = document.getElementById("table1") ;

    var dis=Math.round(Math.random()*10);
    var disv=parseFloat(localStorage.getItem('tot')*(dis/100)).toFixed(2);
    var tv=localStorage.getItem('tot')
    var bill=Math.round(tv-disv);
    var saved=localStorage.getItem('tot')-bill;
    var ip=parseFloat(localStorage.getItem('vat')).toFixed(2);

    // console.log(!(res==null));
    var date=new Date;
    newWin= window.open("","","top=100,left=200,height=400,right=200,width=800");
    newWin.document.open();
    newWin.document.write("<html><head><title>ACME BILL GENARATION</title><link rel='stylesheet' type='text/css' href='BillGen.css'><script herf='BillGen.js'></script></link></head>");

    newWin.document.write("<body><tt><div><div id='dhead'><div style='text-align: center;' ><b><lable  style='font-size: 30;'>ACME GROCERS</lable></b><br><lable align='center' style='font-size: 18;'>Bill Receipt </lable></div><table><tr><td class='sp'><p align='left'>POS NO: "+(localStorage.getItem('activeu')?localStorage.getItem('activeu'):'0')+"-Admin </p></td><td class='sp'><p id='gstno' align='right'> GST NO: 22HZSPK2193A1Z5 </p></td></tr><tr><td class='sp'><p align='left'>Bill No:"+Math.round(Math.random()*100000)+"</p></td><td class='sp'><p id='time' align='right'>D-T : "+date.toLocaleDateString() +" - "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+"</p></td></tr></table></div>");
    newWin.document.write("<div id='dbody'><center><table id=table2>"+res.innerHTML+"</table></center><p>Items Purchased :"+(localStorage.getItem('qunt')?localStorage.getItem('qunt'):0)+"<p> Total VAT (&#8377;)    &nbsp;&nbsp;:"+(ip?ip:0)+"</p><p>Discount ("+dis+"%) &nbsp;&nbsp;:"+disv +"</p> <b><P style='text-align: center;'>TOTAL BILL : "+bill+"/-</P></b></div>");
    newWin.document.write("<div id='dfoot'><lable style='text-align: center;'>Amount in Words : <b>Rs. "+con_to_word(bill)+" only /- </b></lable><p style='text-align: center;color: #ff0000;background-color: #49e22b;'>"+(saved?("You Have Saved Rs."+saved+" on MRP "):'No Discount')+"</p><p style='text-align: center;'> HAVE A NICE DAY ! </p><p style='text-align: center;'>THANK YOU PLEASE VISIT AGAIN</p><center style='color: #0031ff;'><tt class='call'>&copy; All Right are Reserved</tt></center></div></div></tt></body></html>");
    newWin.document.close();
    
    }

function init() {
    if(!(localStorage.getItem('home') === 'bill' && sessionStorage.getItem('home')=== 'bill')){
        alert("Session expired.")
        location.href ='Login.html'
    }
}

function clear1(){
    // console.log("CLEAR FUN");
 ssln=[]
 spc=[]
 spn=[]
 sp=[]
 sq=[]
 stp=[]
 gst=[]
 cmax=0
document.getElementById("table1").innerHTML = '';
// console.log(document.getElementById("table1"));

}