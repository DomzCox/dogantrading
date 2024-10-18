import chart from "../../images/chart.jpg"

export default function Landing() {
  return (
    <div className="container mx-auto px-4 pt-10 mt-10 sm:flex flex-row">

      <div>
      <img src={chart} className="h-25" alt="" />
      </div>

      <div className="">
        <div>
        <h2 className="text-2xl text-teal-500 mt-5 mb-10 p-2">
            Plan
            </h2>

            <p className="p-2">
          A well planned trade is more rewarding that an trade unplanned. Knowing when and what amount you should risk in your trade is so very important
            </p>
        </div>
        <div>
        <h2 className="text-2xl text-teal-500 mb-10 p-2">
            Analyze
            </h2>

            <p className="font p-2">
              Pure analysis, is the definition of how your trade will most likely execute. Never just enter, join us in out Discord to see how we go about every trade for every asset that we trade.
            </p>
        </div>
        <div>
        <h2 className="text-2xl text-teal-500 mb-10 p-2">
            Execute
            </h2>

            <p className="p-2">
              The perfect execution is the icing on the cake. This is where all your chart reading, planning and analysis comes into action. The right ececution is the right and only way to trade. The market produce the results!
            </p>
        </div>
      </div>
    </div>
  )
}
