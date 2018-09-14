
var x;
var store=[];
function tableData(){
		var realT=[];
		var mytable =document.getElementsByTagName("iframe")[0].contentDocument.getElementById("kcmcGrid");
		for(let i=1;i<mytable.rows.length;i++)
		{
			realT[i]=eval("'"+mytable.rows[i].cells[9].innerHTML.match("kcmcGrid__[A-Za-z]{3}[0-9]+_xk")+"'");
		}
		return realT;
	}
setInterval(function()
{
	window.alert=function(){}
	var if1=document.getElementsByTagName("iframe")[0];
	var bt1=if1.contentDocument.getElementById("Button3");
		bt1.onclick=function(){
		alert("已开始抢课! by Lw");
		store.length=0;
		var d=tableData();
			for(let i=1;i<d.length;i++)
			{
				if(document.getElementsByTagName("iframe")[0].contentDocument.getElementById(d[i]).checked==true)
				{
					store.push(d[i]);
				}
			}
			x=setInterval(function()
			{
				for(let i=0;i< store.length;i++)
				{
					document.getElementsByTagName("iframe")[0].contentDocument.getElementById(store[i]).checked=true;
				}
				document.getElementsByTagName("iframe")[0].contentDocument.getElementById("Button1").click();
				window.alert = function() {return false;}
			},300);
		};
		bt1.value="抢课";
		bt1.style="";
},100);

