let Year={
    Fy:{
        subject1:"math1",
        subject2:"chemistry"
    },
    Sy:{
        subject1:"c language",
        subject2:"java"

    },
    Ty:{
        subject1:" ENDS",
        subject2:"ACN"
    }
}

for( let key in Year)
{
   
    for(let k in Year[key])
        console.log(`${k}:${Year[key][k]}`);
        
}