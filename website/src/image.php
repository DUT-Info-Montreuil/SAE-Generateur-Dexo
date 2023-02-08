<?php

class Image
{
    public $id;
    public $account_who_published;
    public $name;
    public $shared;
    public $bin;

    public function __construct($id, $account_who_published, $name, $shared, $bin)
    {
        $this->id = $id;
        $this->account_who_published = $account_who_published;
        $this->name = $name;
        $this->shared = $shared;
        $this->bin = $bin;
    }
}