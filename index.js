/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const axios = require('axios');
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "You're awesome! and thanks for your contribution. We'll review as soon as possible.",
    });
    context.octokit.issues.createComment(issueComment);
    let username = context.payload.sender.login ?? ' unkown';

    const repo = context.payload.repository;
    console.log(repo);
    let issue = context.payload.issue;
    console.log(issue);

    axios.post('https://api.telegram.org/bot6680236259:AAHs4j75KTlbQZikE9f64XPMsDv4GTwLB5g/sendMessage', {
      chat_id: -953632807,
      text: username + " opened an issue, guys take a look once you have time!",
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  });


  app.on("issues.edited", async (context) => {
    const sender = context.payload.sender;
    console.log(sender);
    let username = context.payload.sender.login ?? ' unkown';

    const repo = context.payload.repository;
    console.log(repo);
    let issue = context.payload.issue;
    const issueLink = issue.url;
    console.log(issue);


    axios.post('https://api.telegram.org/bot6680236259:AAHs4j75KTlbQZikE9f64XPMsDv4GTwLB5g/sendMessage', {
      chat_id: -953632807,
      text: ` <a href="${sender.html_url}">${username}</a> edited <a href="${issue.url}">${issue.title}</a> on <a href="${repo.html_url}">${repo.name}</a>. guys take a look once you have time!`,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  });



  app.on("pull_request.opened", async (context) => {
    const issueComment = context.issue({
      body: "You're amazing! and thanks for your contributio.  We'll review as soon as possible.",
    });
    context.octokit.issues.createComment(issueComment);

    console.log(context);
    const username = context.payload.sender.username;

    axios.post('https://api.telegram.org/bot6680236259:AAHs4j75KTlbQZikE9f64XPMsDv4GTwLB5g/sendMessage', {
      chat_id: -987479304,
      text: username + " opened a PR, guys take a look once you have time!",
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  });

  // pull_request

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
