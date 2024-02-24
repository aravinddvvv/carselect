//add new details

function store(){
    info={brand:carbrand.value,price:price.value,key:key.value}
    if(info.key in localStorage)
    {alert("Details Added successfully")};

}