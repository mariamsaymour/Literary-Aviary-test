import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, Send, Mail, Globe } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  onSubmitQuote?: () => void;
}

export function About({ onBack, onSubmitQuote }: AboutProps) {
  return (
    <div className="min-h-screen bg-[#FFF8F2] literary-main-bg">
      {/* Header */}
      <div className="border-b border-[#e5d1c5] bg-[#faeee6]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2 text-[#695046] hover:bg-[#f2dfd3] transition-colors"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="bg-[#695046] overflow-clip relative rounded-bl-[3px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-12 h-12 mx-auto mb-4">
              <div className="absolute left-[19.5px] w-[28.5px] h-[28.5px] top-0">
                <div className="bg-[#695046] h-[28.5px] rounded-[9px] w-[28.5px]" />
                <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <span className="text-[#FFF8F2] text-xl font-bold" style={{ fontFamily: 'Crimson Text, serif' }}>
                    🪶
                  </span>
                </div>
              </div>
            </div>
            <h1 
              className="text-[48px] font-semibold italic leading-[1.2] text-[#302420] mb-2"
              style={{ fontFamily: 'Cormorant, serif' }}
            >
              Literary Aviary
            </h1>
            <p 
              className="text-[#695046] text-xl"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              A field guide to birds in literature
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#faeee6] rounded-[28px] p-8 md:p-12 mb-8 ">
          <div className="max-w-none">
            <div className="space-y-6">
              <p 
                className="text-[#302420] text-lg leading-[1.6] mb-6 font-semibold "
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                The Literary Aviary is a project which explores the ways in which authors have expressed themselves by referring to birds throughout history and geography.
              </p>
              
              <p 
                className="text-[#302420] text-lg leading-[1.6] mb-6 font-semibold "
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                We are always looking to add more quotes to our literary avian field guide! If you'd like to share your avian sightings from literature, use the submit button below. Please ensure that the quote refers to a specific bird species.
              </p>
              
              <p 
                className="text-[#302420] text-lg leading-[1.6] mb-8 font-semibold "
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                If you're interested in getting involved with the project please contact us for more details.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                <Button
                  onClick={onSubmitQuote}
                  className="bg-[#e5d1c5] text-[#302420] hover:bg-[#d4c4b8] transition-colors rounded-[9.02px] px-6 py-3 flex items-center gap-2 font-semibold"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  <Send className="w-4 h-4" />
                  Submit a Quote
                </Button>
                
                <Button
                  className="bg-[#fff8f2] text-[#695046] hover:bg-[#f5ede4] transition-colors rounded-[9.02px] px-6 py-3 flex items-center gap-2 font-semibold border-0"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                  onClick={() => window.open('mailto:contact@literaryaviary.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#fff8f2] rounded-[18px] p-6 text-center">
            <div className="w-12 h-12 bg-[#f2dfd3] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 
              className="text-[#302420] text-xl font-semibold mb-3"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Literary Exploration
            </h3>
            <p 
              className="text-[#695046] leading-[1.5] font-semibold"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Discover how authors across history have used birds to convey emotion, meaning, and beauty in their works.
            </p>
          </div>

          <div className="bg-[#fff8f2] rounded-[18px] p-6 text-center">
            <div className="w-12 h-12 bg-[#f2dfd3] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 
              className="text-[#302420] text-xl font-semibold mb-3"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Global Perspective
            </h3>
            <p 
              className="text-[#695046] leading-[1.5] font-semibold"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Journey through different cultures and time periods to see how birds have inspired writers worldwide.
            </p>
          </div>

          <div className="bg-[#fff8f2] rounded-[18px] p-6 text-center">
            <div className="w-12 h-12 bg-[#f2dfd3] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 
              className="text-[#302420] text-xl font-semibold mb-3"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Species-Specific
            </h3>
            <p 
              className="text-[#695046] leading-[1.5] font-semibold"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Each quote references a specific bird species, creating connections between literature and natural history.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#e5d1c5] pt-8">
          <div className="text-center">
            <p 
              className="text-[#695046] text-sm"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              © 2024 Literary Aviary. A project celebrating the intersection of literature and ornithology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}