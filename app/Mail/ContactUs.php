<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;

    public $request;
    public $mc_authority_paper;
    public $W9;
    public $certificate_of_insurance;
    public $notice_of_assignment;

    /**
     * Create a new message instance.
     */
    public function __construct($request, $mc_authority_paper, $W9, $certificate_of_insurance, $notice_of_assignment)
    {
        $this->request = $request;
        $this->mc_authority_paper = $mc_authority_paper;
        $this->W9 = $W9;
        $this->certificate_of_insurance = $certificate_of_insurance;
        $this->notice_of_assignment = $notice_of_assignment;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(

            from: new Address("nahomrak0916@gmail.com", "New Dispatch Contact"),
            subject: "Dispatch Client Info",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail-template.contact-us-mail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments()
    {
        $attachments  = [];
        if ($this->mc_authority_paper) {
            $attachments[] = Attachment::fromPath(public_path('\\upload\\attachment\\' . $this->mc_authority_paper));
        }
        if ($this->W9) {
            $attachments[] = Attachment::fromPath(public_path('\\upload\\attachment\\' . $this->W9));
        }
        if ($this->certificate_of_insurance) {
            $attachments[] = Attachment::fromPath(public_path('\\upload\\attachment\\' . $this->certificate_of_insurance));
        }
        if ($this->notice_of_assignment) {
            $attachments[] = Attachment::fromPath(public_path('\\upload\\attachment\\' . $this->notice_of_assignment));
        }
        return $attachments;
    }
}
