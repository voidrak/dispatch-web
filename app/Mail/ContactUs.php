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
    public $fileName;

    /**
     * Create a new message instance.
     */
    public function __construct($request, $fileName)
    {
        $this->request = $request;
        $this->fileName = $fileName;
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
        if ($this->fileName) {
            $attachments = [Attachment::fromPath(public_path('\\upload\\attachment\\' . $this->fileName))];
            return $attachments;
        }
    }
}
