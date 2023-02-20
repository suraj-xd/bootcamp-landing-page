import Demo from "./Demo"
import Glass from "./Glass"

export default function NewComp() {
    return (
        <>
            <main className="">
                        <Glass/>
                <div className="w-full bg-red-100">Banner</div>
                <div id="deck" className="">
                    <div class="shelf">

                        <div class="bookend_left"></div>
                        <div class="bookend_right"></div>
                        <div class="reflection">
                        
                        
                        </div>

                    </div>
                    <div class="shelf ">

                        <div class="bookend_left"></div>
                        <div class="bookend_right"></div>
                        <div class="reflection"></div>
                    </div>
                </div>
            </main>
        </>
    )
}