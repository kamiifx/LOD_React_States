import React,{ FunctionComponent } from "react";
import {Link, NavLink} from "react-router-dom";

const StateMain: FunctionComponent = () => {
    return (
        <div>
            <div className="absolute left-[32%] top-[34%] flex flex-row gap-40">
                <a href="context" className="no-underline text-center">
                    <img className="w-[7.3em]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                    <p className="font-epilogue text-blue-400">Context</p>
                </a>
                <a href="recoil" className="no-underline text-center">
                    <img className="w-[6.5em]" src="https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_400x400.jpg"/>
                    <p className="font-epilogue text-blue-400">Recoil</p>
                </a>
                <a href="pullstate" className="no-underline text-center">
                    <img className="w-[13em]" src="https://repository-images.githubusercontent.com/171061051/79bbcb00-7f12-11e9-81ca-941c69f3ec84"/>
                    <p className="font-epilogue text-blue-400">PullState</p>
                </a>
            </div>

        </div>
    )
}

export default StateMain;