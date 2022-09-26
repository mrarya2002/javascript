console.log('rock paper scissor')

let computer_choice, player_choice
let rock, paper, scissor,chance, comp=0,play=0,draw=0;
while(chance!=0)
{
player_choice=Number.parseInt(prompt('Enter the choice 0 for rock 1 for paper 2 for scissor'))
computer_choice=Math.floor(Math.random()*3,1)
console.log(player_choice)
console.log(computer_choice)
if(player_choice==0 && computer_choice==2 || player_choice==1 && computer_choice==0 || player_choice==2 && computer_choice==1)
{
    play+=1
}
else if(player_choice==0 && computer_choice==1 || player_choice==1 && computer_choice==2 || player_choice==2 && computer_choice==0)
{
    comp+=1;
}
else
{
   draw+=1;
}
chance--
}
if(play>comp)
{
    document.writeln('congratulation! you win');
}
else if(play<comp)
{
    document.writeln('you lose!')
}
else
{
    document.writeln('draw')
}