<?php
namespace App\Repositorys\Mysqls;
use Illuminate\Support\Facades\DB;

class CrawlMysql{
    function getAll(){
        return DB::table('crawls')->orderBy('id')->cursorPaginate(5);
    }
    
   

}