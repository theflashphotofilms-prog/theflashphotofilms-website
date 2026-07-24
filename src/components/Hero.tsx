const Hero = () => {
  const phoneNumber = '+91 79849 41331'; // Updated with actual business number

  return (
    <section className="relative bg-gradient-to-br from-dark-maroon to-black text-white">
      <div className="absolute inset-0 bg-black opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-maroon/70 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Capturing Life&apos;s <span className="text-gold">Precious Moments</span> with Artistic Excellence
            </h1>
            <p className="mt-6 text-xl text-medium-gray max-w-2xl">
              Professional wedding, event, and commercial photography &amp; videography services by <span className="text-gold font-medium">Mohit Panchal</span>. Creating timeless memories that last forever.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/portfolio"
                className="inline-block bg-gold text-dark-maroon px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-dark-maroon transition-colors duration-300 text-center"
              >
                View Our Work
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-dark-maroon transition-colors duration-300 text-center"
              >
                Book a Session
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-7.039c-1.746-1.946-2.78-3.617-2.78-4.71v-.114c0-.74.271-1.421.736-2.002l.002-.002.001-.002.001-.002c.472-.589.75-1.282.75-2.034 0-1.857-1.2-3.341-3-3.341v-.003c.174-1.707 1.507-3.053 3.341-3.337v-.003h-.003c1.853-.282 3.205-1.597 3.337-3.337h.003v.003c1.748-.271 3.341-1.016 3.341-2.764 0-1.748-1.393-3.141-3.141-3.141-1.748 0-3.141-1.393-3.141-3.141 0-1.104.619-2.066 1.533-2.574v.003c-.914-.508-1.533-1.47-1.533-2.574 0-1.379 1.121-2.5 2.5-2.5.946 0 1.773.541 2.178 1.332h.003c.406-.791 1.232-1.332 2.178-1.332 1.379 0 2.5 1.121 2.5 2.5 0 1.104-.619 2.066-1.533 2.574v-.003c.914.508 1.533 1.47 1.533 2.574 0 1.748-1.393 3.141-3.141 3.141-1.748 0-3.141-1.393-3.141-3.141 0-.752.278-1.445.75-2.034l.002-.002.001-.002.001-.002c.465-.581.736-1.262.736-2.002v-.114c0-1.093-1.034-2.764-2.78-4.71l1.687-7.039h-3.445l-1.927 8.046c-1.235.811-2.01 2.207-2.01 3.754v.114c0 .74-.271 1.421-.736 2.002l-.002.002-.001.002-.001.002c-.472.589-.75 1.282-.75 2.034 0 1.857 1.2 3.341 3 3.341v.003c-.174 1.707-1.507 3.053-3.341 3.337v.003h.003c-1.853.282-3.205 1.597-3.337 3.337h-.003v-.003c-1.748.271-3.341-1.016-3.341-2.764 0-1.748 1.393-3.141 3.141-3.141 1.748 0 3.141 1.393 3.141 3.141 0 1.104-.619 2.066-1.533 2.574v-.003c.914.508 1.533 1.47 1.533 2.574 0 1.379-1.121 2.5-2.5 2.5-.946 0-1.773-.541-2.178-1.332h-.003c-.406.791-1.232 1.332-2.178 1.332-1.379 0-2.5-1.121-2.5-2.5 0-1.104.619-2.066 1.533-2.574v.003c-.914-.508-1.533-1.47-1.533-2.574 0-1.748 1.393-3.141 3.141-3.141 1.748 0 3.141 1.393 3.141 3.141 0 .752-.278 1.445-.75 2.034l-.002.002-.001.002-.001.002c-.465.581-.736 1.262-.736 2.002v.114c0 1.093 1.034 2.764 2.78 4.71l-1.687 7.039h3.447l1.925-8.046c1.235-.811 2.01-2.207 2.01-3.754v-.114c0-.74.271-1.421.736-2.002l.002-.002.001-.002.001-.002c.472-.589.75-1.282.75-2.034 0-1.857-1.2-3.341-3-3.341v-.003c.174-1.707 1.507-3.053 3.341-3.337v-.003h-.003c1.853-.282 3.205-1.597 3.337-3.337h.003v.003c1.748-.271 3.341 1.016 3.341 2.764z"/>
              </svg>
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-xl font-medium hover:text-gold transition-colors">
                {phoneNumber}
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-full flex items-center justify-center text-gray-500">
                Hero Image
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="bg-gold rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-dark-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-maroon font-bold">Mohit Panchal</p>
                  <p className="text-medium-gray text-sm">Founder & Lead Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;