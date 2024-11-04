<?php

namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Exception;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    // public function sendEmail()
    // {
    //     $toEmail = "nahomabrahamofficial@gmail.com";
    //     $message = "Nahom Abraham wants to use the dispatch services";
    //     $subject = "New Contact form sent";

    //     $response = Mail::to($toEmail)->send(new ContactUs($message, $subject));

    //     dd($response);
    // }
    public function sendContactEmail(Request $request)
    {


        $request->validate([
            "full_name" => "required",
            "company_name" => "nullable",
            "email" => "required|email",
            "phone_number" => "nullable",
            "USDOT" => "nullable",
            "MC" => "nullable",
            "number_track" => "required",
            "type_track" => "required",
            "mc_authority_paper" => "required",
        ]);


        try {
            if ($request->hasFile("mc_authority_paper")) {
                $fileName = time() . "." . $request->file("mc_authority_paper")->extension();
                $request->file("mc_authority_paper")->move("upload/attachment", $fileName);

                $toEmail = $request->email;
                $response = Mail::to($toEmail)->send(new ContactUs($request->all(), $fileName));

                if ($response) {
                    return back()->with("success", 'Thank You for Contacting us');
                }
                return back()->with("error", 'Unable to Submit !! please try again');
            }
        } catch (Exception $ex) {
            dd($ex);
        }
    }
}
