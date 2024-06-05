/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { compileContract } from ".";
import path from 'path';


describe('ton-compiler', () => {
  it('should crash if sources are not under working dir', async () => {
    await expect(compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'legacy', workdir: path.resolve(__dirname, 'engines') })).rejects.toThrowError();
  });
  it.skip('should compile source with legacy compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'legacy' });
    expect(compiled).toMatchSnapshot();
    compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'global.fc')], version: 'legacy' });
    expect(compiled).toMatchSnapshot();
  });
  it.skip('should compile with errors with legacy compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test_bug.fc')], version: 'legacy' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile source with v2022.10 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'v2022.10' });
    expect(compiled).toMatchSnapshot();
    compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'global.fc')], version: 'v2022.10' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile with errors with v2022.10 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test_bug.fc')], version: 'v2022.10' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile source with v2022.12 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'v2022.12' });
    expect(compiled).toMatchSnapshot();
    compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'global.fc')], version: 'v2022.12' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile with errors with v2022.12 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test_bug.fc')], version: 'v2022.12' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile source with v2023.01 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'v2023.01' });
    expect(compiled).toMatchSnapshot();
    compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'global.fc')], version: 'v2023.01' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile with errors with v2023.01 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test_bug.fc')], version: 'v2023.01' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile source with v2024.01 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test.fc')], version: 'v2024.01' });
    expect(compiled).toMatchSnapshot();
    compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'global.fc')], version: 'v2024.01' });
    expect(compiled).toMatchSnapshot();
  });
  it('should compile with errors with v2024.01 compiler', async () => {
    let compiled = await compileContract({ files: [path.resolve(__dirname, 'tests', 'test_bug.fc')], version: 'v2024.01' });
    expect(compiled).toMatchSnapshot();
  });
});