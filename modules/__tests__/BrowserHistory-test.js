import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import BrowserHistory from '../BrowserHistory'
import * as RenderTestSequences from './RenderTestSequences'

describe('BrowserHistory', () => {
  let node
  beforeEach(() => {
    window.history.replaceState(null, null, '/')
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  describe('push', () => {
    it('emits a PUSH action', (done) => {
      const children = RenderTestSequences.PushEmitsAPushAction(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('emits a new location', (done) => {
      const children = RenderTestSequences.PushEmitsANewLocation(done)
      render(<BrowserHistory children={children}/>, node)
    })

    describe('with props', () => {
      it('uses the correct path', (done) => {
        const children = RenderTestSequences.PushWithProps(done)
        render(<BrowserHistory children={children}/>, node)
      })
    })

    describe('with state', () => {
      it('uses a key', (done) => {
        const children = RenderTestSequences.PushWithStateUsesAKey(done)
        render(<BrowserHistory children={children}/>, node)
      })
    })
  })

  describe('replace', () => {
    it('emits a REPLACE action', (done) => {
      const children = RenderTestSequences.ReplaceEmitsAReplaceAction(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('emits a new location', (done) => {
      const children = RenderTestSequences.ReplaceEmitsANewLocation(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('changes the key', (done) => {
      const children = RenderTestSequences.ReplaceChangesTheKey(done)
      render(<BrowserHistory children={children}/>, node)
    })
  })

  describe('pop', () => {
    it('emits a POP action', (done) => {
      const children = RenderTestSequences.PopEmitsAPopAction(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('emits a new location', (done) => {
      const children = RenderTestSequences.PopEmitsANewLocation(done)
      render(<BrowserHistory children={children}/>, node)
    })
  })

  describe('prompt', () => {
    it('blocks a push', (done) => {
      const children = RenderTestSequences.PromptBlocksAPush(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('blocks a replace', (done) => {
      const children = RenderTestSequences.PromptBlocksAReplace(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('blocks the back button or go(-1)', (done) => {
      const children = RenderTestSequences.PromptBlocksTheBackButton(done)
      render(<BrowserHistory children={children}/>, node)
    })

    it('blocks the forward button or go(1)', (done) => {
      const children = RenderTestSequences.PromptBlocksTheForwardButton(done)
      render(<BrowserHistory children={children}/>, node)
    })
  })
})
