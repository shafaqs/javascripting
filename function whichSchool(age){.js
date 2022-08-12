function whichSchool(age){
if (age < 13){
return "Elementary School";
}
else if (age >= 13 && age <= 18){
  return "Secondary School";
}
else{
  return "Lighthouse labs";
}
  }
  console.log("I am 12. Which school should I go to?");
  console.log(whichSchool(12));
  