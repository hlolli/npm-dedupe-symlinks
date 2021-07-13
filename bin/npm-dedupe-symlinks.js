#!/usr/bin/env node

import Rx from 'rx';
import symlinkDedupe from '../src/index.js';

var logObserver = Rx.Observer.create(
  function( el ) {
    console.log( el );
  },
  function( el ) {
    console.error( el );
  },
  function( ) {
     console.log( 'completed' );
  }
);

symlinkDedupe( process.cwd()  ).subscribe( logObserver );
