<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Quote;

class QuoteController extends Controller{

  public function postQuote(Request $request){
    $quote = new Quote();
    $quote->content = $request->input('content');
    $quote->save();

    return response()->json(['quote' => $quote], 201);
  }

  public function showQuote($id){
    $quote = Quote::find($id);
    $response = [
      'quote' => $quote
    ];

    return response()->json(['quote' => $quote], 200);
  }

  public function getQuote(){
    $quote = Quote::all();
    $response = [
      'quote' => $quote
    ];

    return response()->json($response, 200);
  }

  public function putQuote(Request $request, $id){
    $quote = Quote::find($id);
    if(!$quote){
      return response()->json(['message' => 'Document not found'], 404);
    }

    $quote->content = $request->input('content');
    $quote->save();

    return response()->json(['quote' => $quote], 201);
  }

  public function deleteQuote(Request $request, $id){
    $quote = Quote::find($id);
    $quote->delete();

    return response()->json(['message' => 'Quote Deleted'], 200);
  }
}
