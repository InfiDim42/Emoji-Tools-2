/*
 * Emoji Tools
 * Copyright (C) 2015-2017 Mitch Talmadge (https://MitchTalmadge.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
const process = require("child_process");

@Injectable()
export class FontToolsService {

    constructor() {

    }

    /**
     * Converts a TTF file to a TTX file.
     * @param ttfPath The path to the TTF.
     * @param ttxPath The path to store the TTX.
     */
    convertTTFtoTTX(ttfPath: string, ttxPath: string): Observable<void> {
        return Observable.create(listener => {
            Observable.timer(1000).subscribe(
                () => {
                    listener.next();
                    listener.complete();
                }
            )
        });
    }

}