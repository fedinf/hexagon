<?php

namespace Rule\Adapter;

interface EntityManagerInterface
{
    /**
     * @param mixed $object
     *
     * @return void
     */
    public function persist($object);

    /**
     * @return void
     */
    public function flush();
}
