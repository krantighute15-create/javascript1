var ptr=""
// for(i=1;i<=4;i++)
// {
//     for(j=1;j<=4;j++){
//         ptr+="* "
//     }
//     ptr+="\n"
// }
// console.log(ptr);

// or(i=1;i<=4;i++)
// // {
//      for(j=1;j<=i;j++)
//      {
//         ptr+="* "
//      }
//      ptr+="\n" }


// for(i=1;i<=4;i++)
// {
//     for(j=4;j<=i;j--)
//     {
//         ptr+="* "
//     }
//     ptr+=""
//

for(i=1;i<=6;i++){
    for(j=5;j>=i;j--)
{
    ptr+=" "
}
for(k=1;k<=i*2-1;k++){
    if(k=1||k=i*2-1)
ptr+="* "
    else
        ptr+=" "
}
ptr+="\n"}

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        ptr+=" "
    }
    for(k=4;k>=i*2-1;k--)
    {
        ptr+="* "
    }ptr+="\n"
}
console.log(ptr)