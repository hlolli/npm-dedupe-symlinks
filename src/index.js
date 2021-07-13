import Rx from 'rx';
import path from 'path';
import getSymlinkedModules from './getSymlinkedModules.js';
import dedupe from './dedupe.js';

/**
 * Performs the deduplication of the given module, even if it has symbolic
 * linked sub modules.
 *
 * @param  {string}      dirPath
 * @return {Observable}           Observable that just contains rubbish :)
 */
export default function symlinkDedupe( dirPath ) {
  return Rx.Observable.just( path.join( dirPath, 'node_modules' ) )
    .flatMap( getSymlinkedModules )
    .toArray()
    .flatMap( dedupe.bind( null, dirPath ) );
}
