<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Word;
use Illuminate\Http\Request;

class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $words = Word::all();
        return response()->json(
            data: ['words' => $words],
            status: 200
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $word = Word::create(attributes: $request->all());
        return response()->json(
            data: [
                'message' => 'カテゴリーを作成しました',
                'category' => $word
            ],
            status: 201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $word = Word::with(relations: 'category')->findOrFail(id: $id);
        return response()->json(data: $word);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Word $word)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $word = Word::findOrFail(id: $id);

        $validated = $request->validate(rules: [
            'name' => 'required|string|max:255',
            'meaning' => 'required|string|max:255',
            'example_sentence' => 'nullable|string',
            'category_id' => 'required|exists:categories,id'
        ]);

        $word->update($validated);

        return response()->json(data: $word);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $word = Word::findOrFail(id: $id);
        $word->delete();

        return response()->json(data: null, status: 204);
    }
}
