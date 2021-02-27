<?php
//1.1 Злой клоун
//Злой клоун хочет, чтобы в смайликах было не более одной скобки подряд. Напишите с помощью PHP функцию,
//которая поможет ему в этом

$smile = ':)))))))';
$smile = preg_replace('/\)+/i', ' ) ', $smile);
echo $smile;

//1.2 Счастливые билеты
//Номер билета состоит из 6 цифр. Билет считается удачным, если сумма первых трех чисел равна сумме следующих трех чисел.
// Примеры таких номеров билетов:  933591, 030300. Напишите с помощью PHP функцию, которая возвращает все счастливые числа

function happyNumbers()
{
    $result = [];

    for ($i = 100000; $i <= 999999; $i++) {

        $startPart = substr((string)$i, 0, 3);
        $finishPart = substr((string)$i, 3, 3);

        $left = $right = 0;

        for ($j = 0; $j <= strlen($startPart) - 1; $j++) {
            $left += (int)$startPart[$j];
            $right += (int)$finishPart[$j];
        }

        if ($left == $right) {
            $result[] = $i;
        }
    }

    return $result ? $result : false;
}

var_dump(happyNumbers());


