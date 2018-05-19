<?php

namespace Rule\Adapter;

interface RepositoryInterface
{
    /**
     * @return void
     */
    public function findBy(array $criteria = [], array $orderBy = [], $limit = null, $offset = null);
}