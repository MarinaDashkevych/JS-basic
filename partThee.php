<?php


class CollectionOne
{
    protected static $items = [];

    public function add(object $obj, $data = null)
    {
        $trueKey = self::getHash($obj);
        self::$items[$trueKey] = ['obj' => $obj, 'data' => $data];
        self::$items['obj'][$trueKey] = $obj;
        self::$items['data'][$trueKey] = $data;
    }

    public function remove(object $obj)
    {
        $trueKey = self::getHash($obj);
        unset(self::$items['obj'][$trueKey]);
        unset(self::$items['data'][$trueKey]);
    }

    public function getHash(object $obj)
    {
        return spl_object_hash($obj);
    }

    public function current()
    {
        $trueKey = array_key_last(self::$items['obj']);
        return self::$items['obj'][$trueKey];
    }

    public function getObjectList()
    {
        return array_values(self::$items['obj']);
    }

    public function check($obj)
    {
        $trueKey = self::getHash($obj);
        return isset(self::$items['obj'][$trueKey]);
    }

    public static function removeAll()
    {

        self::$items['obj'] = [];
        self::$items['data'] = [];
    }

}