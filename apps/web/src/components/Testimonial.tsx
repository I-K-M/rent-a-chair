const Testimonial = (props: { name: string; job: string; text: string }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-600">{props.name}</h4>
                  <p className="text-gray-600">{props.job}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {props.text}
              </p>
            </div> 
        );
    }   
    export default Testimonial;