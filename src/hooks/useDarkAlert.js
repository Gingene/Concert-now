import Swal from 'sweetalert2';

export default function () {
  const swalWithStylingButtons = Swal.mixin({
    customClass: {
      popup: 'px-6 py-10 rounded-md bg-black-90 text-white text-nowrap',
      confirmButton:
        'mt-4 mr-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-[3px] border-tiffany bg-tiffany text-primary p-2 md:py-2 md:px-4 lg:py-2 lg:px-6 rounded-btn1',
      cancelButton:
        'mt-4 ml-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-[3px] border-black-80 bg-black-80 text-primary text-white p-2 md:py-2 md:px-4 lg:py-2 lg:px-6 rounded-btn1',
    },
    buttonsStyling: false,
  });

  return { swalWithStylingButtons };
}
