<?php

namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{

    public function sendContactEmail(Request $request)
    {


        try {
            $request->validate([
                "full_name" => "required",
                "company_name" => "nullable",
                "email" => "required|email",
                "phone_number" => "required",
                "USDOT" => "nullable",
                "MC" => "required",
                "number_track" => "nullable",
                "type_track" => "nullable",
                "mc_authority_paper" => "nullable",
                "W9" => "nullable",
                "certificate_of_insurance" => "nullable",
                "notice_of_assignment" => "nullable",

            ]);

            $mc_authority_paper = null;
            $W9 = null;
            $certificate_of_insurance = null;
            $notice_of_assignment = null;

            if ($request->hasFile("mc_authority_paper")) {
                $mc_authority_paper =   "mc_authority_paper-" . time() . "." . $request->file("mc_authority_paper")->extension();
                $request->file("mc_authority_paper")->move("upload/attachment", $mc_authority_paper);
            }
            if ($request->hasFile("W9")) {
                $W9 =   "W9-" . time() . "." . $request->file("W9")->extension();
                $request->file("W9")->move("upload/attachment", $W9);
            }
            if ($request->hasFile("certificate_of_insurance")) {
                $certificate_of_insurance = "certificate_of_insurance-" . time() . "." . $request->file("certificate_of_insurance")->extension();
                $request->file("certificate_of_insurance")->move("upload/attachment", $certificate_of_insurance);
            }
            if ($request->hasFile("notice_of_assignment")) {
                $notice_of_assignment = "notice_of_assignment-" . time() . "." . $request->file("notice_of_assignment")->extension();
                $request->file("notice_of_assignment")->move("upload/attachment", $notice_of_assignment);
            }

            $toEmail = "rakkpoper@gmail.com";
            $response = Mail::to($toEmail)->send(new ContactUs($request->all(), $mc_authority_paper, $W9, $certificate_of_insurance, $notice_of_assignment));

            if ($response) {
                return back()->with("success", 'Thank You for Contacting us');
            }
        } catch (Exception $ex) {
            return back()->with("error", 'Unable to Submit !! please try again');
        }
    }
}
