export default function Footer() {
    let year =  new Date().getFullYear();
    return(
        <div className="flex pt-36">
            <p className="text-champagne text-base font-poiret">Created and developed By Asif Ali &copy; {year}</p>
        </div>
    );
}