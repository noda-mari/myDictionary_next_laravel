<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json(
            data: ['categories' => $categories],
            status: 200
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::create(attributes: $request->all());
        return response()->json(
            data: [
                'message' => 'カテゴリーを作成しました',
                'category' => $category
            ],
            status: 201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $category = Category::with(relations: 'words')->findOrFail(id: $id);

        return response()->json(data: $category);    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $update = [
            'user_id' => $request->user_id,
            'name' => $request->name
        ];

        $category = Category::where(column: 'id', operator: $id)->update(attributes: $update);

        if($category){
            return response()->json(
                data: [
                    'message' => 'カテゴリ名ーを更新しました',
                    'data' => $category
                ],
                status: 200
            );
        }else{
            return response()->json(
                data: [
                    'message' => '該当するカテゴリーがありません'
                ],
                status: 404
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::where(column: 'id', operator: $id)->delete();
        if ($category) {
            return response()->json(data: [
                'message' => 'カテゴリーを削除しました',
            ], status: 200);
        } else {
            return response()->json(data: [
                'message' => '該当するカテゴリーがありません',
            ], status: 404);
        }
    }
}
