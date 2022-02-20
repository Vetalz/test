// Есть функция primitiveMultiply, которая умножает числа, но случайным образом может 
// выбрасывать исключения типа: NotificationException, ErrorException. Задача написать 
// функцию обертку которая будет повторять вычисление при исключении 
// NotificationException, но прекращать работу при исключениях ErrorException

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if ( e instanceof ErrorException) {
            throw e
        } else {
            return a * b;
        }
    }
}

console.log(reliableMultiply(8, 8))