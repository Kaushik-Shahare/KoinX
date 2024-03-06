import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="pb-12">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
            <div className="flex flex-col justify-end py-7 pl-6 bg-white rounded-lg max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between pr-20 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col flex-1 justify-center my-auto font-semibold leading-[120%]">
                  <div className="flex gap-0 justify-between">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1fbc44cb60c86a8991776ccc8e6e7b5e465b26529d99a532a8b7fc0c8be6abe?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                      className="w-9 aspect-[1.12]"
                    />
                    <div className="flex flex-col flex-1 justify-center self-start pl-2 mt-1">
                      <div className="flex gap-2 justify-between">
                        <div className="grow justify-center py-1.5 text-2xl text-slate-900">
                          Bitcoin
                        </div>
                        <div className="grow my-auto text-base text-gray-500">
                          BTC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pt-2.5 text-base font-medium leading-5 text-white">
                  <div className="px-2.5 pt-1.5 pb-3.5 rounded-lg border border-solid bg-slate-500 border-slate-500">
                    Rank #1
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10 max-w-full w-[583px] max-md:flex-wrap">
                <div className="flex flex-col basis-0 text-slate-900">
                  <div className="text-3xl font-semibold leading-10">
                    $46,953.04
                  </div>
                  <div className="text-base font-medium leading-7">
                    ₹ 39,42,343
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-start self-start py-px pr-16 font-medium whitespace-nowrap">
                  <div className="flex gap-3 justify-center py-1">
                    <div className="flex gap-2 justify-between px-2.5 py-1.5 text-base text-center text-emerald-500 bg-emerald-50 rounded">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6861c7faf3abfca20273e8ee75cc1e57579201cf1450a7d022f2417b8c825062?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                        className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
                      />
                      <div>2.51%</div>
                    </div>
                    <div className="grow my-auto text-sm leading-7 text-slate-500">
                      (24H)
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 mr-2.5 max-w-full h-px bg-zinc-200 w-[847px]" />
              <div className="flex gap-5 justify-between pr-9 mt-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto text-base font-semibold leading-5 text-slate-900">
                  Bitcoin Price Chart (USD)
                </div>
                <div className="flex gap-3 justify-between items-center py-px text-sm font-medium leading-5 text-gray-500 whitespace-nowrap">
                  <div className="grow self-stretch my-auto">1H</div>
                  <div className="self-stretch">24H</div>
                  <div className="justify-center self-stretch px-2.5 text-blue-700 bg-indigo-100 aspect-[1.84] rounded-[32px]">
                    7D
                  </div>
                  <div className="self-stretch my-auto text-xs leading-5">
                    1M
                  </div>
                  <div className="self-stretch my-auto text-xs leading-5">
                    3M
                  </div>
                  <div className="self-stretch my-auto text-xs leading-5">
                    6M
                  </div>
                  <div className="self-stretch my-auto">1Y</div>
                  <div className="grow self-stretch my-auto">ALL</div>
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4eddc952d586e657760013ac83d6d3fd38964b2afc6e07086243ba03b970893?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                className="mt-10 w-full aspect-[2.13] max-md:max-w-full"
              />
            </div>
            <div className="flex gap-5 justify-between items-center pr-5 mt-5 text-base font-medium tracking-normal border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)] text-zinc-700 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center self-stretch py-4 font-semibold text-blue-700 whitespace-nowrap border-solid aspect-[1.52] border-b-[3px] border-b-blue-600">
                Overview
              </div>
              <div className="flex-auto self-stretch my-auto">Fundamentals</div>
              <div className="flex-auto self-stretch my-auto">
                News Insights
              </div>
              <div className="self-stretch my-auto">Sentiments</div>
              <div className="self-stretch my-auto">Team</div>
              <div className="self-stretch my-auto">Technicals</div>
              <div className="flex-auto self-stretch my-auto">Tokenomics</div>
            </div>
            <div className="flex flex-col px-6 pt-7 pb-12 mt-5 bg-white rounded-lg max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
                Performance
              </div>
              <div className="flex gap-2 px-px mt-8 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col pt-1.5 pr-9 pb-3.5 text-gray-700 whitespace-nowrap basis-0">
                  <div className="text-sm leading-5">Today’s Low</div>
                  <div className="mt-2.5 text-base font-medium leading-6">
                    46,930.22
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-end self-end mt-8 max-md:max-w-full">
                  <div className="flex flex-col justify-center self-stretch rounded-lg bg-neutral-900 bg-opacity-30 max-md:max-w-full">
                    <div className="shrink-0 rounded-xl h-[5px] max-md:max-w-full" />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c1d4eab331dbdb9b353371e28ebf09d4a37080f361540c071d903c2a26a69a8?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="mr-32 w-3 aspect-[1.49] max-md:mr-2.5"
                  />
                  <div className="mt-2 mr-24 text-sm leading-5 text-gray-700 max-md:mr-2.5">
                    $48,637.83
                  </div>
                </div>
                <div className="flex flex-col pt-1.5 pb-3.5 pl-8 text-right text-gray-700 whitespace-nowrap basis-0">
                  <div className="text-sm leading-5">Today’s High</div>
                  <div className="mt-2.5 text-base font-medium leading-6">
                    49,343.83
                  </div>
                </div>
              </div>
              <div className="flex gap-2 px-px mt-4 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col pt-1.5 pr-12 pb-3.5 text-gray-700 whitespace-nowrap basis-0">
                  <div className="text-sm leading-5">52W Low</div>
                  <div className="mt-2.5 text-base font-medium leading-6">
                    16,930.22
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center my-auto rounded-lg bg-neutral-900 bg-opacity-30 max-md:max-w-full">
                  <div className="shrink-0 rounded-xl h-[5px] max-md:max-w-full" />
                </div>
                <div className="flex flex-col pt-1.5 pb-3.5 pl-9 text-right text-gray-700 whitespace-nowrap basis-0">
                  <div className="self-start ml-3.5 text-sm leading-5 max-md:ml-2.5">
                    52W High
                  </div>
                  <div className="mt-2.5 text-base font-medium leading-6">
                    49,743.83
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 self-start pr-20 mt-10 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow">Fundamentals</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7837347b75556ea5b019cf7e3c667f2a3f0f4ad3f4ed51006ad2b78598cff2a?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pr-10 font-medium max-md:mt-10">
                      <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="text-sm leading-5 text-slate-500">
                          Bitcoin Price
                        </div>
                        <div className="text-sm leading-5 text-right text-gray-900">
                          $16,815.46
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-1 whitespace-nowrap border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="grow justify-center py-3.5 pr-14 text-sm leading-5 border-0 border-solid border-zinc-200 text-slate-500">
                          24h Low / 24h High
                        </div>
                        <div className="grow justify-center py-3.5 pr-3 pl-12 text-sm leading-5 text-right text-gray-900 border-0 border-solid border-zinc-200 max-md:pl-5">
                          $16,382.07 / $16,874.12
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="flex-auto text-sm leading-5 text-slate-500">
                          7d Low / 7d High
                        </div>
                        <div className="flex-auto text-sm leading-5 text-right text-gray-900">
                          $16,382.07 / $16,874.12
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-4 text-sm leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="flex-auto text-slate-500">
                          Trading Volume
                        </div>
                        <div className="flex-auto text-right text-gray-900">
                          $23,249,202,782
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="flex-auto text-sm leading-5 text-slate-500">
                          Market Cap Rank
                        </div>
                        <div className="text-sm leading-5 text-right text-gray-900">
                          #1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="flex gap-5 justify-between py-4 text-sm font-medium leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="text-slate-500">Market Cap</div>
                        <div className="flex-auto text-right text-gray-900">
                          $323,507,290,047
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-4 text-sm font-medium leading-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="flex-auto text-slate-500">
                          Market Cap Dominance
                        </div>
                        <div className="text-right text-gray-900">38.343%</div>
                      </div>
                      <div className="flex gap-5 justify-between py-4 font-medium border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="flex-auto text-sm leading-5 text-slate-500">
                          Volume / Market Cap
                        </div>
                        <div className="text-sm leading-5 text-right text-gray-900">
                          0.0718
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-2.5 pr-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="my-auto text-sm font-medium leading-5 text-slate-500">
                          All-Time High
                        </div>
                        <div className="flex flex-col leading-5 text-right whitespace-nowrap">
                          <div className="text-sm font-medium text-red-500">
                            <span className="">$69,044.77 </span>
                            <span className="text-red-500">-75.6%</span>
                          </div>
                          <div className="mt-1 text-xs text-gray-900">
                            Nov 10, 2021 (about 1 year)
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-2 pr-5 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
                        <div className="my-auto text-sm font-medium leading-5 text-slate-500">
                          All-Time Low
                        </div>
                        <div className="flex flex-col leading-5 text-right whitespace-nowrap">
                          <div className="text-sm font-medium text-emerald-500">
                            <span className="">$67.81 </span>
                            <span className="text-emerald-500">24729.1%</span>
                          </div>
                          <div className="mt-1 text-xs text-gray-900">
                            Jul 06, 2013 (over 9 years)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-6 pt-7 pb-12 mt-5 bg-white rounded-lg max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
                Sentiment
              </div>
              <div className="flex gap-1.5 justify-between pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow">Key Events</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcfa675217f62cddcc7d5620b928a189ac291b85ba7bc0fa6cd5af3417888cc?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch px-5 pt-5 pb-10 w-full text-sm leading-5 bg-indigo-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5 max-md:max-w-full">
                      <div className="flex gap-2 justify-between py-px">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65af558a92e5fa5e48309d4cbe602361ca48bc66829d63eebc7196712ce4031?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                          className="self-start w-11 aspect-square"
                        />
                        <div className="flex flex-col flex-1">
                          <div className="font-medium text-zinc-900">
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis
                            dignissim mattis enim tincidunt.
                          </div>
                          <div className="mt-2 text-slate-600">
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus
                            risus est faucibus metus quis. Amet sapien quam
                            viverra adipiscing condimentum. Ac consectetur et
                            pretium in a bibendum in. Sed vitae sit nisi viverra
                            natoque lacinia libero enim.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch pt-5 pb-10 pl-5 mx-auto w-full text-sm leading-5 bg-emerald-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5">
                      <div className="flex gap-2 justify-between py-px">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9cbaad8305734893e92aa1696df0fb017f2463eab9155cc992926558850a29?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                          className="self-start w-11 aspect-square"
                        />
                        <div className="flex flex-col flex-1">
                          <div className="font-medium text-zinc-900">
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis
                            dignissim mattis enim tincidunt.
                          </div>
                          <div className="mt-2 text-slate-600">
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus
                            risus est faucibus metus quis. Amet sapien quam
                            viverra adipiscing condimentum. Ac consectetur et
                            pretium in a bibendum in. Sed vitae sit nisi viverra{" "}
                            <br />
                            in a adipisinc metus quis del
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 justify-between pr-20 mt-8 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow">Analyst Estimates</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcfa675217f62cddcc7d5620b928a189ac291b85ba7bc0fa6cd5af3417888cc?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center self-stretch px-9 py-8 mx-auto w-full font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 rounded-[59.22px] max-md:px-5 max-md:mt-10">
                      <div className="flex gap-0.5 justify-between py-1.5">
                        <div className="grow text-4xl">76</div>
                        <div className="grow my-auto text-base leading-6">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-2.5 justify-between py-2 max-md:flex-wrap max-md:max-w-full">
                        <div className="text-base leading-6">Buy</div>
                        <div className="my-auto max-w-full h-2 bg-emerald-500 rounded-sm w-[349px]" />
                        <div className="flex-auto text-sm leading-5">76%</div>
                      </div>
                      <div className="flex gap-2.5 py-2 max-md:flex-wrap max-md:max-w-full">
                        <div className="text-base leading-5">Hold</div>
                        <div className="my-auto h-2 rounded-sm bg-neutral-300 w-[33px]" />
                        <div className="flex-auto text-base leading-6 max-md:max-w-full">
                          8%
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between py-2 pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="grow text-base leading-5">Sell</div>
                        <div className="flex gap-2.5 justify-between text-base leading-6">
                          <div className="my-auto h-2 bg-red-500 rounded-sm w-[66px]" />
                          <div className="grow">16%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-6 pt-7 mt-5 text-lg font-bold leading-5 bg-white rounded-lg text-slate-900 max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold text-slate-900 max-md:max-w-full">
                About Bitcoin
              </div>
              <div className="mt-8 max-md:max-w-full">What is Bitcoin?</div>
              <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
                Bitcoin’s price today is US$16,951.82, with a 24-hour trading
                volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                currently -7.70% from its 7-day all-time high of $18,366.66, and
                3.40% from its 7-day all-time low of $16,394.75. BTC has a
                circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
              </div>
              <div className="shrink-0 mt-4 h-px border-b border-solid border-b-slate-300 border-b-opacity-60 max-md:max-w-full" />
              <div className="mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet
              </div>
              <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. <br />
                <br />
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
                <br />
                <br />
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col pb-12 max-md:mt-5 max-md:max-w-full">
            <div className="flex flex-col items-center px-12 pt-8 pb-12 bg-blue-600 rounded-lg max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-bold leading-10 text-center text-white w-[268px]">
                Get Started with KoinX for FREE
              </div>
              <div className="self-stretch mt-3.5 text-sm font-medium leading-6 text-center text-zinc-100">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f47b3ba26cc3996916f889f4864f2cf9ec605402146e70b378a82f06f645177?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                className="mt-10 max-w-full aspect-[1.08] w-[178px]"
              />
              <div className="flex flex-col justify-center px-6 py-2.5 mt-5 max-w-full text-base font-semibold leading-7 whitespace-nowrap bg-white rounded-lg text-slate-900 w-[238px] max-md:px-5">
                <div className="flex gap-1.5 justify-between">
                  <div className="grow">Get Started for FREE</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1040280e6360599acf0920e3b4ac40129a6b5dfc3e3e8e8af1eeb5afcf6ecb3a?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="my-auto w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 mt-5 text-base font-medium bg-white rounded-lg max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-7 text-slate-900">
                Trending Coins (24h)
              </div>
              <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap">
                <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/199380dbdf2999e88dd2a59dec54af2e2f3d84c5b489993e7279ed26f65a5dc9?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">Ethereum(ETH)</div>
                </div>
                <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6861c7faf3abfca20273e8ee75cc1e57579201cf1450a7d022f2417b8c825062?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
                  />
                  <div>8.21%</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11c8a00a630f54af363f1ee4f5650595551fc1c04b9a641c0b8d271f00d73cff?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">Bitcoin (BTC)</div>
                </div>
                <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/52181c2b882603ddecf644a0b79e80ec8be579189f5f2d41d6b4e93a11bba95c?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
                  />
                  <div>5.26%</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7929d45ec1c60999b0b7b5202c73f090e4cb2591ae8fb1828eb1d2467ff15aef?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">Polygon (MATIC)</div>
                </div>
                <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/52181c2b882603ddecf644a0b79e80ec8be579189f5f2d41d6b4e93a11bba95c?apiKey=20b0c988497b44bab879ebfd0a34dc50&"
                    className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
                  />
                  <div>4.32%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
