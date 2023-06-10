// Создайте всплывающее окно, которое спрашивает ввод любимого фильма и если ввод неверен, то программа отправляет запрос alert “Попробуйте ещё раз”.
// В функции должны быть минимум 2 условия. Не просто использовуйте prompt или alert или confirm, а создайте свою функцию, пример: "function Вашеимяфункциитут()"‼️
let favorite_film_one = "Мстители"
let favorite_film_two = "Титаник"
let name_film = prompt('Введите название любимого фильма: ')

function check_name(name_one, name_two, name_three)
{
    while ((name_one.toUpperCase() != name_three.toUpperCase()) && (name_two.toUpperCase() != name_three.toUpperCase())) 
    {
        name_three = prompt('Попробуйте еще раз: ')         
    }
    
    alert("Верно!!!!!")
}

check_name(favorite_film_one, favorite_film_two, name_film)



