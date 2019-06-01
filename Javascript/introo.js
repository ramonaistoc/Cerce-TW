var buton1, buton2, z,  x; //x ul e div ul de inceput
var setari;
var date_jucator;
var submit_ok = 1;
var punctaj = 0;
var raspunsCorect = 0;
var raspunsGresit = 0;
window.onload = function()
{	
	date_jucator = document.createElement("div");
	document.body.appendChild(date_jucator);
	document.getElementsByTagName("div")[0].setAttribute("id","date_jucat");
	var tit = document.createElement("p");
	tit.innerHTML = "Date jucator";
	date_jucator.appendChild(tit);
	document.getElementsByTagName("p")[0].setAttribute("id","titlu_date");
	
	var num = document.createElement("p");
	num.innerHTML = "Nume: ";
	date_jucator.appendChild(num);
	num.setAttribute("id","nume_jucator");
	
	var sex = document.createElement("p");
	sex.innerHTML = "Sex: ";
	date_jucator.appendChild(sex);
	sex.setAttribute("id", "id_sex");
	sex.style.marginBottom = "0";
	
	var culoare_harta = document.createElement("p");
	culoare_harta.innerHTML = "Culoare harta: ";
	date_jucator.appendChild(culoare_harta);
	culoare_harta.setAttribute("id","id_culoare_harta");


	x = document.createElement("div");
	document.body.appendChild(x);
	
	document.body.style.backgroundColor = "white";
	
	document.getElementsByTagName("div")[1].setAttribute("class", "stildiv");
	
	z = document.createElement("div"); //creez aici si div ul jocului ca sa ii pot seta width din setari
	document.body.appendChild(z);
	z.setAttribute("class","stildiv");
	z.style.display = "none";

	
	var titlu = document.createElement("H1");
	x.appendChild(titlu);
	titlu.innerHTML = "Joculet";
	
	document.getElementsByTagName("H1")[0].setAttribute("id","titlu");
	
	buton1 = document.createElement("BUTTON");
	x.appendChild(buton1);
	buton1.innerHTML = "Începe";
    
	
	buton2 = document.createElement("BUTTON");
	x.appendChild(buton2);
	buton2.innerHTML = "Setări";
	
	for(let i=0;i<=1;i++) 
		document.getElementsByTagName("BUTTON")[i].setAttribute("class", "butoane");
	

document.getElementsByClassName("butoane")[1].onclick = function functieSetari()
{
		x.style.display = "none";
		
		y = document.createElement("div");
		document.body.appendChild(y);
		y.setAttribute("class","stildiv");	
	
		//pt latime
		
		var val_init1 = document.createElement("span");
		y.appendChild(val_init1);
		val_init1.innerHTML = "25";
		document.getElementsByTagName("span")[0].setAttribute("class","distanta_range");
		
		var val_fin1 = document.createElement("span");
		val_init1.appendChild(val_fin1);
		val_fin1.innerHTML = "70";
		val_fin1.style.marginLeft = "7.3rem";
		document.getElementsByTagName("span")[1].setAttribute("class","distanta_range");
		
		var latime = document.createElement("p");
		y.appendChild(latime);
		latime.innerHTML = "Latime ecran: ";
		latime.setAttribute("id","latime");
		document.getElementById("latime").setAttribute("class","pentru_texte_din_setari");
		
		var inp_range1 = document.createElement("input");
		inp_range1.setAttribute("type","range");
		latime.appendChild(inp_range1);
		inp_range1.min = "27";
		inp_range1.max = "70";
		inp_range1.value = "25";
				
		inp_range1.onchange = function() 
		{		
				if(this.value != 25)
				{ 
				  y.style.height = this.value + "rem";
				  x.style.height = this.value + "rem";
				  z.style.height = this.value + "rem";
				}
		}
				
		//pt lungimee
		
		var val_init2 = document.createElement("span");
		y.appendChild(val_init2);
		val_init2.innerHTML = "30";
		document.getElementsByTagName("span")[2].setAttribute("class","distanta_range");
		
		var val_fin2 = document.createElement("span");
		val_init2.appendChild(val_fin2);
		val_fin2.innerHTML = "60";
		val_fin2.style.marginLeft = "7.3rem";
		document.getElementsByTagName("span")[3].setAttribute("class","distanta_range");
		
		var lungime = document.createElement("p");
		y.appendChild(lungime);
		lungime.innerHTML = "Lungime ecran: ";
		lungime.setAttribute("id","lungime");
		document.getElementById("lungime").setAttribute("class","pentru_texte_din_setari");
		
		var inp_range2 = document.createElement("input");
		inp_range2.setAttribute("type","range");
		lungime.appendChild(inp_range2);
		inp_range2.min = "30";
		inp_range2.max = "60";
		inp_range2.value = "30";
				
		
		inp_range2.onchange = function() 
		{
			
				if(this.value != 30)
				{
					y.style.width = this.value + "rem";
					x.style.width = this.value + "rem";
				    z.style.width = this.value + "rem";
				}
		}
						
		//asta e pentru nume		
				
		var nume = document.createElement ("p");
		y.appendChild(nume);
		nume.innerHTML = "Nume: ";
		nume.setAttribute("id","nuume");
		document.getElementById("nuume").setAttribute("class","pentru_texte_din_setari");
		
		var input_text = document.createElement("input");
		input_text.setAttribute("type","text");
		nume.appendChild(input_text);
		input_text.setAttribute("id","name");
		
		var val_nume = document.createElement("span");
		
		input_text.onchange = function()
		{
			if( document.getElementById("name") != null)
			{
				val_nume.innerHTML = document.getElementById("name").value;
				num.appendChild(val_nume);
				submit_ok = 1;
			}	
			else 
				if( document.getElementById("name") != null && document.getElementById("nume_jucator").childNodes.length > 0)
					{
						document.getElementById("nume_jucator").removeChild(val_nume);
						val_nume.innerHTML = document.getElementById("name").value;
						num.appendChild(val_nume);
						submit_ok = 1;
	
					}
		}

		if(document.getElementById("name").value == null)
			submit_ok = 0;
		
		var intrebare = document.createElement("p");
		intrebare.innerHTML = "Ati mai jucat?";
		y.appendChild(intrebare);
		intrebare.id = "ask";
		document.getElementById("ask").setAttribute("class","pentru_texte_din_setari");
		
		var da = document.createElement("span");
		intrebare.appendChild(da);
		da.innerHTML = "Da";
		
		var check1 = document.createElement("input");
		check1.setAttribute("type","checkbox");
		da.appendChild(check1);

		var nu = document.createElement("span");
		da.appendChild(nu);
		nu.innerHTML = "Nu";
		
		var check2 = document.createElement("input");
		check2.setAttribute("type","checkbox");
		nu.appendChild(check2);
		
		check1.onclick = function()
		{
			if(check1.checked == true )
			{
				alert("Yay, doriti sa repetati");
				check2.checked = false;
				submit_ok = 1;
			}
		}
		
		check2.onclick = function()
		{
			if(check2.checked == true )
			{
				alert("Pregateste-te de quiz!");
				check1.checked = false;
				submit_ok = 1;
			}
		}
		
		if(check1.checked == false && check2.checked == false)
		{
			submit_ok = 0; 
		}
		
		//input de tip radio
		
		var text_fata = document.createElement("p");
		text_fata.innerHTML = "Fata";
		y.appendChild(text_fata);
		text_fata.id = "fata";
		document.getElementById("fata").setAttribute("class","pentru_texte_din_setari");
		var fata = document.createElement("input");
		fata.setAttribute("type","radio");
		text_fata.appendChild(fata);

		var text_baiat = document.createElement("span");
		text_baiat.innerHTML = "Baiat";
		text_baiat.id = "baiat";
		text_baiat.setAttribute("class","pentru_texte_din_setari");
		text_fata.appendChild(text_baiat);
		var baiat = document.createElement("input");
		baiat.setAttribute("type","radio");
		text_baiat.appendChild(baiat);
		
		var foto_fata = document.createElement("img");	
		foto_fata.setAttribute("src","../Imagini/fata.jpg");
		var foto_baiat = document.createElement("img");
		foto_baiat.setAttribute("src","../Imagini/baiat.jpg")

		baiat.onclick = function()
		{
			if(fata.checked == true)
			{
				document.getElementById("id_sex").removeChild(foto_fata);
				fata.checked = false;
			}
			submit_ok = 1;
			baiat.checked = true;
			sex.appendChild(foto_baiat);
		}
		
		fata.onclick = function()
		{
			if(baiat.checked == true)
			{
				document.getElementById("id_sex").removeChild(foto_baiat);
				baiat.checked = false;
			}
			submit_ok = 1;
			fata.checked = true;		
			sex.appendChild(foto_fata);
		}

		
		if(fata.checked == false && baiat.checked == false)
		{	
			submit_ok = 0;
		}
		
		// select simpu, aleg culoare hartii
		
		var alege_culoarea_hartii = document.createElement("p");
		alege_culoarea_hartii.setAttribute("id","harta_culoare");
		alege_culoarea_hartii.innerHTML = "Alege culoarea hartii: ";
		y.appendChild(alege_culoarea_hartii);
		document.getElementById("harta_culoare").setAttribute("class", "pentru_texte_din_setari");
		
		var select_simplu = document.createElement("select");
		y.appendChild(select_simplu);
		select_simplu.setAttribute("id","id_select");
		
		var optiuni = document.createElement("option"); 
		var text_nod_maro = document.createTextNode("Maro"); //pentru culoarea maro
		optiuni.appendChild(text_nod_maro);
		document.getElementById("id_select").appendChild(optiuni);
		
		var optiune2 = document.createElement("option");//pentru verde
		var text_node_verde = document.createTextNode("Verde");
		optiune2.appendChild(text_node_verde);
		document.getElementById("id_select").appendChild(optiune2);
		
		var optiune3 = document.createElement("option");
		var text_node_albastru = document.createTextNode("Albastru");
		optiune3.appendChild(text_node_albastru);
		document.getElementById("id_select").appendChild(optiune3);

		var culoare_aleasa = document.createElement("span");
		culoare_aleasa.setAttribute("id","ales");
		
		document.getElementById("id_select").onchange = function()
		{
			var x =  document.getElementById("id_select").selectedIndex;
			
			if(culoare_aleasa.parentNode)
			{
				culoare_aleasa.parentNode.removeChild(culoare_aleasa);
			}
			
			if(x == 0)
			{
				z.style.backgroundImage = 'none';
				z.style.backgroundColor = "#bf8040";
				
				// pentru a aparea in tabelul cu date culoarea aleasa

				culoare_aleasa.innerHTML = " maro ";
				culoare_harta.appendChild(culoare_aleasa);
				
			}
			else if(x == 1)
			{
				z.style.backgroundImage = 'none';
				z.style.backgroundColor = "#b3ff66";
				
				culoare_aleasa.innerHTML = " verde ";
				culoare_harta.appendChild(culoare_aleasa);
			}
			else if(x == 2)
			{
				z.style.backgroundImage = 'none';
				z.style.backgroundColor = "#99ccff";
			
				culoare_aleasa.innerHTML = " albastru ";
				culoare_harta.appendChild(culoare_aleasa);
			}
			else submit_ok = 0
			
		}
		
		var spatiu = document.createElement("p"); // am creat asta pentru ca textarea sa nu se aseze langa selectul simplu, sa fie spatiu
		y.appendChild(spatiu);
		
		//textarea
		
		var text_area = document.createElement("textarea");
		var teext = document.createTextNode("Punctajul minim pentru a termina jocul este de 10 puncte. Fiecare intrebare are 2 puncte. La apasarea tastei x jocul va incepe de la inceput");
		text_area.appendChild(teext);
		y.appendChild(text_area);
		
		var spatiu2 = document.createElement("p");
		y.appendChild(spatiu2);
		
		var buton_submit = document.createElement("button");
		buton_submit.setAttribute("id","id_submit");
		buton_submit.innerHTML = " Ok ";
		y.appendChild(buton_submit);
		
		buton_submit.onclick = function()
		{
			if(submit_ok == 0)
			{
				setTimeout ( function() 
									{						
										alert("Nu ai completat toate campurile");
									}, 2000
							);
			}
			else 
			{
				y.style.display = "none";
				x.style.display = "block";
			}
			
		}
}

if( submit_ok == 1)
{ 
document.getElementsByClassName("butoane")[0].onclick = function functieJoc()
{
	alert("Fa dublu click in afara celor doua divuri!");

	x.style.display = "none";
	z.style.display = "block";

	var okBafta = 0;

	window.addEventListener("dblclick", function(e)
										{
											if(okBafta == 0)
											{ 
												okBafta = 1;
												var bafta = document.createElement("div");
												bafta.id = "dispari";
												bafta.style.width = "156px";
												bafta.style.height = "83px";
												bafta.style.backgroundColor = "#c68c53";
												bafta.style.borderRadius = "25%";
												document.body.appendChild(bafta);
												bafta.style.position = "absolute";
												bafta.style.top=e.pageY+ "px";
												bafta.style.left= e.pageX+"px";
												bafta.style.textAlign = "center";
												bafta.style.marginTop = "0px";

												var suc = document.createElement("p");
												suc.style.fontSize = "1.5rem";
												suc.style.fontStyle = "italic";
												suc.innerHTML = "Bafta! ";
												bafta.appendChild(suc);
											}
										}
							)

	var cerc_1 = new Array (10);
	
	for(var i = 0; i < 10; i++)
	{ 
		cerc_1[i] = document.createElement("div");
		cerc_1[i].setAttribute("class", "circle");
		z.appendChild(cerc_1[i]);

		if (i == 0)
		{ 
			cerc_1[i].style.left = "8rem";
			cerc_1[i].style.top = "27rem";
		}

		else if ( i == 1)
		 	{
		 		cerc_1[i].style.left = "7rem";
		 		cerc_1[i].style.top = "15rem";
		 	}	
		else if( i == 2)
			{
				cerc_1[i].style.left = "13rem";
		 		cerc_1[i].style.top = "20rem";
			}
		else if (i == 3)
			{
				cerc_1[i].style.left = "20rem";
		 		cerc_1[i].style.top = "24rem";
			}	
		else if (i == 4)
			{
				cerc_1[i].style.left = "20rem";
		 		cerc_1[i].style.top = "5rem";
			}
		else if( i == 5)
			{
				cerc_1[i].style.left = "19rem";
		 		cerc_1[i].style.top = "15rem";
			}
		else if( i == 6)
			{
				cerc_1[i].style.left = "26rem";
		 		cerc_1[i].style.top = "10rem";
			}
		else if( i == 7)
			{
				cerc_1[i].style.left = "31rem";
		 		cerc_1[i].style.top = "18rem";
			}
		else if ( i == 8)
			 {
				cerc_1[i].style.left = "34rem";
		 		cerc_1[i].style.top = "7rem";
			}
		else if (i == 9 )
			{
				cerc_1[i].style.left = "41rem";
		 		cerc_1[i].style.top = "7rem";
			}
	}
	var castel = document.createElement("img");
	castel.src = "../Imagini/castle.png";
	z.appendChild(castel);
	castel.setAttribute("id", "casa");

	var steag = document.createElement("img");
	steag.src = "../Imagini/steag.png";
	z.appendChild(steag);
	steag.setAttribute("id", "flag");


	 window.addEventListener("keypress",function(e)
	 									{
					                        var cod = e.key;

					                        if(cod == "x")
					                        {
					                        	location.reload();
					                        }
					                    }
					        )

	 //creez div cu intrebari


	 var vector_intrebari = new Array (10);

	for( var i= 0; i < 10; i++)
	{ 
	 	vector_intrebari[i] = document.createElement("div");
	 	vector_intrebari[i].setAttribute("class", "div_intrebari");
	 	document.body.appendChild(vector_intrebari[i]);
	 	vector_intrebari[i].style.display = "none";
	 	
	 	if(i == 0)
	 	{  
		 	var intrebare1 = document.createTextNode("In ce an a fost primul camp?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if ( i == 1)
	    {	
	    	var intrebare1 = document.createTextNode("In ce zi a lunii februarie este ziua cercetasilor?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if ( i == 2)
	    {
	    	var intrebare1 = document.createTextNode("Cand a aparut cercetasia in Romania?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 3)
	    {
	    	var intrebare1 = document.createTextNode("Unde a fost prima jamboree?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 4)
	    {
	    	var intrebare1 = document.createTextNode("In ce a a fost prima jamboree in Romania?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 5)
	    {
	    	var intrebare1 = document.createTextNode("Care este simoblul cercetasilor?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
		else if( i == 6)
	    {
	    	var intrebare1 = document.createTextNode("Cate legi sunt in Legea cercetasului?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 7)
	    {
	    	var intrebare1 = document.createTextNode("Cate puncte are metoda scout?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 8)
	    {
	    	var intrebare1 = document.createTextNode("Cate ramuri exista?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }
	    else if( i == 9)
	    {
	    	var intrebare1 = document.createTextNode("Cati baieti au participat la primul camp?");
		 	vector_intrebari[i].appendChild(intrebare1);
		 	vector_intrebari[i].classList.add("text_intrebare");
	    }

	 	var raspus = document.createElement("input");
	 	raspus.type = "text";
	 	vector_intrebari[i].appendChild(raspus);
	 	raspus.setAttribute("class", "input_raspuns");

	}
	var k = 0;
	var apas_cerc = document.getElementsByClassName("circle");

	 for(var i = 0; i < 10; i++)
	{
		apas_cerc[i].addEventListener( "click", function()
													{ 		 	
														if (punctaj >= 10)
														{
															document.getElementById("dispari").style.display = "none";

															date_jucator.style.display = "none";
															z.style.display = "none";
															var win = document.createElement("p");
															win.innerHTML = "Bravo, ai castigat!";
															win.id = "gata";
															document.body.appendChild(win);
														
															var progress=document.createElement("div");
															var load=document.createElement("div");
															load.innerHTML="10%";
															var width=10;
															progress.style.width="100%";
															progress.style.backgroundColor="#ddd";
															load.style.width="10%";
															load.style.height="92px";
															load.style.backgroundColor= "black";
															load.style.textAlign="center";
															load.style.lineHeight="86px";
															load.style.color="white";
															var id = setInterval(frame,10);
															function frame(){
																if (width >= 100) {
																	clearInterval(id);
																} else {
																	width++; 
																	load.style.width = width + '%'; 
																	load.innerHTML = width * 1  + '%';

																}
															}
															progress.appendChild(load);
															document.body.appendChild(progress);
															alert("Ati raspuns corect la " + raspunsCorect + " intrebari si gresit la " + raspunsGresit );
															k = 11;
														}

														if(k == 0)
														{
															vector_intrebari[k].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[0].onchange = function()
																				 { 
																				 	//intrebare primul camp
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "1907")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[0].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[0].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[0].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 1)
														{
															vector_intrebari[1].style.display = "block";
															k++;

																setInterval( function()
																			{
																				//intrebare ziua cercetasilor
																				 document.getElementsByClassName("input_raspuns")[1].onchange = function()
																				 { 

																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "22")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[1].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[1].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[1].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 2)
														{
															vector_intrebari[2].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[2].onchange = function()
																				 { 
																				 	//in ce an a aparut cercetasia in Romania

																				 	var raspuns_dat = this.value

																					if( raspuns_dat == "1913")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[2].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[2].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[2].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 3)
														{
															vector_intrebari[3].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[3].onchange = function()
																				 { 
																				 	//prima jamboree
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "Londra")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[3].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[3].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[3].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 4)
														{
															vector_intrebari[4].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[4].onchange = function()
																				 { 
																				 	//jamboree made in Ro
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "1930")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[5].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[5].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[4].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 5)
														{
															vector_intrebari[5].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[5].onchange = function()
																				 { 
																				 	//simbolul
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "crin")
																						{
																							punctaj += 2;
																							raspunsCorect++;

																							cerc_1[4].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[4].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[5].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 6)
														{
															vector_intrebari[6].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[6].onchange = function()
																				 { 
																				 	//nr legi
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "10")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[6].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[6].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[6].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 7)
														{
															vector_intrebari[7].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[7].onchange = function()
																				 { 
																				 	//nr metoda scout
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "7")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[7].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[7].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[7].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 8)
														{
															vector_intrebari[8].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[8].onchange = function()
																				 { 
																				 	//nr ramuri
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "5")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[8].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[8].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[8].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
														else if(k == 9)
														{
															vector_intrebari[9].style.display = "block";
															k++;

																setInterval( function()
																			{
																				
																				 document.getElementsByClassName("input_raspuns")[9].onchange = function()
																				 { 
																				 	//nr baieti in primul camp
																					var raspuns_dat = this.value;	

																					if( raspuns_dat == "22")
																						{
																							punctaj += 2;
																							raspunsCorect++;
																							cerc_1[9].style.backgroundColor = "green";

																						}
																					else 
																						{
																							raspunsGresit++;	
																							cerc_1[9].style.backgroundColor = "red";

																						}	
																					alert("Punctajul tau este: " + punctaj);
																					vector_intrebari[9].style.display = 'none';

																				}

																			}

																			,3000);
															//vector_intrebari[k].parentNode.removeChild(vector_intrebari[k]);
														}
													}
									  )
	}

	
}//asta e de la functia

}

else 
	{
		alert(" Nu ai completat setarile! ");
	}
}