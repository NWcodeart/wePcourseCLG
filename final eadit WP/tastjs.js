
  function check() {

  var LinguisticConter=0;
  var LinguisticNon=0;
  var LogicalConter=0;
  var LogicalNon=0;
  var MeaningsConter=0;
  var MeaningsNon=0;
  var MotorConter=0;
  var MotorNon=0;
  var MusicalConter=0;
  var MusicalNon=0;
  var PersonalConter=0;
  var PersonalNon=0;
  var SocialConter=0;
  var SocialNon=0;
  var NaturalConter =0;
  var NaturalNon =0;
  var question1= document.quiz.question1.value;
  var question2= document.quiz.question2.value;
  var question3= document.quiz.question3.value;
  var question4= document.quiz.question4.value;
  var question5= document.quiz.question5.value;
  var question6= document.quiz.question6.value;
  var question7= document.quiz.question7.value;
  var question8= document.quiz.question8.value;
  var question9= document.quiz.question9.value;
  var question10= document.quiz.question10.value;
  var question11= document.quiz.question11.value;
  var question12= document.quiz.question12.value;
  var question13= document.quiz.question13.value;
  var question14= document.quiz.question14.value;
  var question15= document.quiz.question15.value;
  var question16= document.quiz.question16.value;


  //الذكاء اللغوي
    if (question1=="1A1") {LinguisticConter+=5; }
    else if (question1=="1A2") {LinguisticConter+=4;}
    else if (question1=="1A3") {LinguisticConter+=3;}
    else if (question1=="1A4") {LinguisticConter+=2;}
    else { LinguisticConter++;}

if(question1==null || question1==''){
  alert("لم تتم الإجابة ع السؤال الأول");
  return false;
}

  if (question2=="2A1") {LinguisticNon+=5; }
  else if (question2=="2A2") {LinguisticNon+=4;}
  else if (question2=="2A3") {LinguisticNon+=3;}
  else if (question2=="2A4") {LinguisticNon+=2;}
  else {LinguisticNon++;}

  var Linguistic=LinguisticConter+LinguisticNon;
  if(question2==null || question2==''){
    alert("لم تتم الإجابة ع السؤال الثاني");
    return false;
  }

  //االذكاء المنطقي
  if (question3=="3A1") {LogicalConter+=5; }
  else if (question3=="3A2") {LogicalConter+=4;}
  else if (question3=="3A3") {LogicalConter+=3;}
  else if (question3=="3A4") {LogicalConter+=2;}
  else { LinguisticConter++;}

  if(question3==null || question3==''){
    alert("لم تتم الإجابة ع السؤال الثالث");
    return false;
  }

  if (question4=="4A1") {LogicalNon+=5; }
  else if (question4=="4A2") {LogicalNon+=4;}
  else if (question4=="4A3") {LogicalNon+=3;}
  else if (question4=="4A4") {LogicalNon+=2;}
  else {LogicalNon++;}
  var Logical=LogicalNon+LogicalConter;

  if(question4==null || question4==''){
    alert("لم تتم الإجابة ع السؤال الرابع");
    return false;
  }

  //الذكاء المعاني
  if (question5=="5A1") {MeaningsConter+=5; }
  else if (question5=="5A2") {MeaningsConter+=4;}
  else if (question5=="5A3") {MeaningsConter+=3;}
  else if (question5=="5A4") {MeaningsConter+=2;}
  else { MeaningsConter++;}

  if(question5==null || question5==''){
    alert("لم تتم الإجابة ع السؤال الخامس");
    return false;
  }

  if (question6=="6A1") {MeaningsNon+=5; }
  else if (question6=="6A2") {MeaningsNon+=4;}
  else if (question6=="6A3") {MeaningsNon+=3;}
  else if (question6=="6A4") {MeaningsNon+=2;}
  else {MeaningsNon++;}
  var Meanings=MeaningsConter+MeaningsNon;

  if(question6==null || question6==''){
    alert("لم تتم الإجابة ع السؤال السادس");
    return false;
  }

  // الذكاء الحركي
  if (question7=="7A1") {MotorConter+=5; }
  else if (question7=="7A2") {MotorConter+=4;}
  else if (question7=="7A3"){MotorConter+=3;}
  else if (question7=="7A4") {MotorConter+=2;}
  else { MotorConter++;}

  if(question7==null || question7==''){
    alert("لم تتم الإجابة ع السؤال السابع");
    return false;
  }

  if (question8=="8A1") {MotorNon+=5; }
  else if (question8=="8A2") {MotorNon+=4;}
  else if (question8=="8A3") {MotorNon+=3;}
  else if (question8=="8A4") {MotorNon+=2;}
  else {MotorNon++;}
  var Motor=MotorConter+MotorNon;

  if(question8==null || question8==''){
    alert("لم تتم الإجابة ع السؤال الثامن");
    return false;
  }

  //الذكاء الموسيقي
  if (question9=="9A1") {MusicalConter+=5; }
  else if (question9=="9A2") {MusicalConter+=4;}
  else if (question9=="9A3"){MusicalConter+=3;}
  else if (question9=="9A4") {MusicalConter+=2;}
  else { MusicalConter++;}

  if(question9==null || question9==''){
    alert("لم تتم الإجابة ع السؤال التاسع");
    return false;
  }

  if (question10=="10A1") {MusicalNon+=5; }
  else if (question10=="10A2") {MusicalNon+=4;}
  else if (question10=="10A3") {MusicalNon+=3;}
  else if (question10=="10A4") {MusicalNon+=2;}
  else {MusicalNon++;}
  var Musical=MusicalConter+MusicalNon;

  if(question10==null || question10==''){
    alert("لم تتم الإجابة ع السؤال العاشر");
    return false;
  }

  //الذكاء الشخصي
  if (question11=="11A1") {PersonalConter+=5; }
  else if (question11=="11A2") {PersonalConter+=4;}
  else if (question11=="11A3"){PersonalConter+=3;}
  else if (question11=="11A4") {PersonalConter+=2;}
  else { PersonalConter++;}

  if(question11==null || question11==''){
    alert("لم تتم الإجابة ع السؤال الحادي عشر");
    return false;
  }


  if (question12=="12A1") {PersonalNon+=5; }
  else if (question12=="12A2") {PersonalNon+=4;}
  else if (question12=="12A3") {PersonalNon+=3;}
  else if (question12=="12A4") {PersonalNon+=2;}
  else {PersonalNon++;}
  var Personal = PersonalConter+PersonalNon;

  if(question12==null || question12==''){
    alert("لم تتم الإجابة ع السؤال الثاني عشر");
    return false;
  }

  //الذكاء الأجتماعي
  if (question13=="13A1") {SocialConter+=5; }
  else if (question13=="13A2") {SocialConter+=4;}
  else if (question13=="12A3"){SocialConter+=3;}
  else if (question13=="13A4") {SocialConter+=2;}
  else { SocialConter++;}

  if(question13==null || question13==''){
    alert("لم تتم الإجابة ع السؤال الثالث عشر");
    return false;
  }


  if (question14=="14A1") {SocialNon+=5; }
  else if (question14=="14A2") {SocialNon+=4;}
  else if (question14=="14A3") {SocialNon+=3;}
  else if (question14=="14A4") {SocialNon+=2;}
  else {SocialNon++;}
  var Social=SocialConter+SocialNon;

  if(question14==null || question14==''){
    alert("لم تتم الإجابة ع السؤال الرابع عشر");
    return false;
  }


  //الذكاء الطبيعي
  if (question15=="15A1") {NaturalConter+=5; }
  else if (question15=="15A2") {NaturalConter+=4;}
  else if (question15=="15A3"){NaturalConter+=3;}
  else if (question15=="15A4") {NaturalConter+=2;}
  else { NaturalConter++;}

  if(question15==null || question15==''){
    alert("لم تتم الإجابة ع السؤال الخامس عشر");
    return false;
  }

  if (question16=="16A1") {NaturalNon+=5; }
  else if (question16=="16A2") {NaturalNon+=4;}
  else if (question16=="16A3") {NaturalNon+=3;}
  else if (question16=="16A4") {NaturalNon+=2;}
  else {NaturalNon++;}
  var Natural=NaturalConter+NaturalNon;

  if(question16==null || question16==''){
    alert("لم تتم الإجابة ع السؤال السادس عشر");
    return false;
  }


  //Natural,Social,Personal,Musical,Motor,Meanings,Logical,Linguistic
  var ar=[Natural,Social,Personal,Musical,Motor,Meanings,Logical,Linguistic];
  var max=ar[0];
  for(var i=0;i<9;i++){
  if(ar[i]>max){max=ar[i];}
  }






  if(max== Natural){document.getElementById("result8").style.display = 'block';}
  else if(max== Social){document.getElementById("result7").style.display = 'block';}
  else if(max== Personal){document.getElementById("result6").style.display = 'block'; }
  else if(max== Musical){document.getElementById("result5").style.display = 'block'; }
  else if(max== Motor){document.getElementById("result4").style.display = 'block'; }
  else if(max== Meanings){document.getElementById("result3").style.display = 'block'; }
  else if(max== Logical){document.getElementById("result2").style.display = 'block'; }
  else {document.getElementById("result1").style.display = 'block';}
  }
