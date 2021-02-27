<?php
require_once 'partTwoText.php';

//.1 Обратная струна
//Напишите с помощью PHP функцию с такими функциями, как strrev (). Вы НЕ должны использовать стандартные функции PHP. Вы
//можете использовать циклы и другие языковые конструкции.

// НЕ осилила:(


//////.2 Слова в тексте
//////Напишите с помощью PHP функцию getWords (string $ text), которая возвращает ассоциативный массив, где слово является
////// ключом,а значение - сколько раз слово находится в тексте. Вам нужно нормализовать слово (слово и слово должны
////// быть одним и тем же ключом, вы можете использовать функцию PHP strlower ()).

$rows = strtolower($textEx);
$count_words = str_word_count($rows, 1);
$unique_array = array_count_values($count_words);
echo '<pre>';
print_r($unique_array);

////.3 Сумма массива
////Напишите с помощью PHP функцию, которая будет возвращать сумму всех элементов массива, массив может быть вложенным
////////массивом (вложенность может быть 2 или более). Вы НЕ должны использовать стандартные функции PHP

$rows = strtolower($textEx);
$array = str_word_count($rows, 1);

function count_array($array, $sum = 0)
{
    foreach ($array as $k) {
        $sum++;
        if (!empty($k['c']) && is_array($k['c'])) {
            $sum += count_array($k['c']);
        }
    }
    return $sum;
}

echo count_array($array);


/////.4 Волшебник решил пошутить. Он заменил все буквы в словах на их зеркальные (A будет заменено на Z, B на Y и т.
////Д.). Напишите с помощью PHP функцию.

$rows = strtolower($textEx);
function flipit($rows)
{
    return implode(' ', array_map('strrev', explode(' ', $rows)));
}

echo flipit($rows); //зеркально


////.5 Уникальные слова
////Напишите с помощью PHP функцию getUniqueWords (string $ text), которая возвращает массив со словами, которые
////используются в тексте только один раз. Вам нужно нормализовать слово (слово и слово должны быть одинаковыми для
////функции, вы можете использовать функцию PHP strlower ()).

$rows = strtolower($textEx);
$couns_words = str_word_count($rows, 1);
$unique_array = array_count_values($couns_words);
foreach ($unique_array as $key => $value) {
    if ($value === 1) {
        echo '<pre>';
        print_r($key);
    }
}
