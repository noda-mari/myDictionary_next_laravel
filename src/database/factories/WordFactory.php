<?php

namespace Database\Factories;

use App\Models\Word;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Word>
 */
class WordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'category_id' => $this->faker->numberBetween(1,10),
            'name'=> $this->faker->text(10),
            'meaning'=> $this->faker->text(20),
            'example_sentence' => $this->faker->sentence(),
        ];
    }
}
