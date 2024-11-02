<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'meaning',
        'example_sentence',
    ];

    public function category() {

        return $this->belongsTo(Category::class); 
    }

    public function likedByUsers()
    {
        return $this->belongsToMany(User::class, 'likes');
    }
}
