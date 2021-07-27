---
title: "The best server monitoring tools for developers"
titlePrefix: "The best"
titleCategory: "server monitoring"
titleSuffix: "tools for developers"
date: 2021-07-22T12:00:00+00:00
draft: true
summary:
  A review of the best server monitoring tools for developers and devops
  engineers.
metaDescription:
  A review of the best server monitoring tools for developers and devops
  engineers. Comparing Datadog, New Relic, Grafana, Prometheus, InfluxDB and
  Telegraf.
headerType: fixed
hideLines: true
hidePlanes: true
type: tools
layout: category-review
isPage: tools
isSubpage: server-monitoring
customStyle: true
pageType: tools-category-review
customPageStyle: true
category: devops
subcategory: server-monitoring
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBioBrief:
  From 2009-2018 David was CEO at Server Density, a SaaS server monitoring
  startup. He is now co-founder at Console.
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for over 15 years.
relatedCategories:
  - category: devops
    subcategory:
      label: Log management
      name: log-management
  - category: devops
    subcategory:
      label: Containers
      name: containers
  - category: devops
    subcategory:
      label: Network monitoring
      name: network-monitoring
  - category: devops
    subcategory:
      label: Website monitoring
      name: website-monitoring
  - category: developer-tools
    subcategory:
      label: App distribution
      name: app-distribution
  - category: developer-tools
    subcategory:
      label: Backend framework
      name: backend-framework
  - category: developer-tools
    subcategory:
      label: Browser testing
      name: browser-testing
  - category: developer-tools
    subcategory:
      label: Frontend framework
      name: frontend-framework
  - category: developer-tools
    subcategory:
      label: Package managers
      name: package-managers
  - category: api
    subcategory:
      label: API
      name: api
  - category: cloud
    subcategory:
      label: Storage
      name: storage
  - category: cloud
    subcategory:
      label: Serverless
      name: serverless
  - category: cloud
    subcategory:
      label: Compute
      name: compute
  - category: database
    subcategory:
      label: Time series database
      name: time-series-database
  - category: database
    subcategory:
      label: Graph database
      name: graph-database
  - category: security
    subcategory:
      label: Authentication
      name: authentication
  - category: security
    subcategory:
      label: Vulnerability management
      name: vulnerability-management
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="tldr" >}}

### tldr; the best server monitoring tools

In this article we review the best server monitoring tools for developers and
engineers. We review both hosted SaaS and self-hosted on-premises monitoring
tools to give you the widest view of current server monitoring solutions.

Researching 18 different server monitoring services, we detail core
functionality and assess key requirements including integrations / plugins,
graphs and alerts. We also considered features like dashboards, events, incident
management, runbooks (usually part of alerts) and team collaboration. We'll
comment on these as useful bonus features if they are present.

The best hosted SaaS server monitoring tools:

{{< tools/category-review/tldr-list--open >}}
{{< tools/category-review/miniature-card name="Datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadoghq.com/" anchor="datadog" score="5" >}}
{{< tools/category-review/miniature-card name="New Relic" thumbnail="/img/favicons/newrelic.com.png" url="https://newrelic.com/" anchor="new-relic" score="4.5" >}}
{{< ul--close >}}

The best self-hosted on premises server monitoring tools:

{{< tools/category-review/tldr-list--open >}}
{{< tools/category-review/miniature-card name="Grafana + Prometheus" thumbnail="/img/favicons/grafana.com.png" url="https://grafana.com/" anchor="grafana-prometheus" score="4.3" >}}
{{< tools/category-review/miniature-card name="InfluxDB + Telegraf" thumbnail="/img/favicons/www.influxdata.com.png" url="https://www.influxdata.com/" anchor="influxdb-telegraf" score="4.0" >}}
{{< ul--close >}}

But do you still need server monitoring? New applications might be serverless
and cloud-first, but servers still exist! Whether you are running a Kubernetes
cluster, training machine learning models on GPUs, or just running an Nginx load
balancer that you want to control directly, you are going to need to monitor
those servers.

Even when you are using cloud services, modern monitoring doesn't just mean
monitoring servers - the best monitoring tools cover your entire infrastructure,
from cloud services to serverless and from log search to application performance
monitoring. Legacy applications still rely on servers, both virtual machines
(VMs) and bare metal, and with cloud
[proving to be extremely expensive as you scale](https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/)
more engineering teams are back to deploying servers.

You might not be at the scale of Dropbox who
[famously moved away from Amazon S3](https://news.ycombinator.com/item?id=25139673)
for storage
([but not analytics](https://aws.amazon.com/solutions/case-studies/dropbox-s3/)),
and you may not need to build your own data centers
[like Apple](https://9to5mac.com/guides/apple-data-center/), but spinning up EC2
VMs, or deploying code on Digital Ocean droplets, is still common. Servers are
where it starts.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="requirements" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="requirements" >}} Requirements
{{</ rich-title-3 >}}

Deciding whether you want your monitoring to be a hosted SaaS product or
self-hosted on premises is the key decision (see each section, below). Once you
have chosen, there are 3 requirements that we will assess for each review.

{{< framed-section-item--open >}}

#### Integrations / plugins

Every monitoring tool should collect basic system stats like CPU usage, process
lists and disk space, usually via a monitoring agent that works on Linux,
Windows, and other platforms or operating systems. However, monitoring is
useless without integration into everything in your tech stack. Can it monitor
your database, web servers, load balancers, network, and the application itself?
The list of integrations is the most important factor in picking a server
monitoring tool.

The number of integrations is important, but so is the quality. The advantage of
plugin systems is that anyone can build integrations, but that is not helpful if
they are later abandoned or not kept up to date. There might be a long list of
integrations, but do they work well?

{{< div--close >}}

{{< framed-section-item--open >}}

#### Graphs

Modern monitoring tools must graph and visualize the monitoring data. Simple
graphs may be all that is needed, but the best server monitoring services have
sophisticated graphing capabilities such as filtering, different types of
graphs, percentile breakdowns, trend analysis, annotations, etc. Graphs should
be customizable and load quickly. Collecting lots of monitoring data is no good
if you can't visualize it.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists" >}}

#### Alerts

Monitoring has two purposes - helping you debug problems that have already
occurred, and alerting you when something is going wrong (ideally before it
causes an outage). Alerts are a key feature in all server monitoring systems.

Alerting is broken down into two parts:

- **Triggers:** Metrics cause alerts to trigger. This can be based on simple
  thresholds e.g. is CPU load over 1.5? It can also be much more complex.
  Different values can trigger at different thresholds e.g. warning vs error. It
  can be based on relative values or % change over a specified time period
  (delta alerts). Alerts could trigger based on anomalies, or as composites of
  multiple metrics with conditions that must all exist before an alert is
  triggered. This can get complicated so it is important to have flexibility to
  define what you care about.
- **Notifications:** Once an alert is triggered you need to be notified about
  it. Email notifications are fine if you are in your inbox and/or the alert
  isn't time-critical, but you need rules to define when, how, and who is
  notified. Perhaps you want text messages or push notifications to a mobile
  app. Maybe Slack notifications that someone has to acknowledge are better. Or
  integrations into incident management tools like PagerDuty and ServiceNow. The
  ability to customize notification configurations is important.

{{< div--close >}}

{{< framed-section-item--open >}}

#### Everything else

The best monitoring tools in 2021 don't just monitor servers they also have lots
of other features. These include incident management, runbooks, team
collaboration, machine learning for anomaly detection and suggested
remediations, error tracking, and many other complementary features.

You should expect to find monitoring vendors offering other products like
application performance monitoring (APM), log search, security monitoring, real
user monitoring (RUM), profiling and tracing.

In this review we are only reviewing server monitoring products. We'll comment
on complementary features if they are present, but other monitoring products are
out of scope.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="hosted-saas-monitoring-tools" >}}

### Hosted SaaS server monitoring tools

We reviewed 6 hosted SaaS monitoring tools. The best is: [Datadog](#datadog). We
also like: [New Relic](#new-relic).

{{< framed-section--open classes="framed-section-default" >}}

#### Pros & cons of hosted SaaS server monitoring

Back in the old days there was no choice - you had to run your own monitoring on
premises, either using an open source product like Nagios and Zabbix, or by
paying to license an enterprise monitoring solution.

Today, there is a much greater choice between whether you self-host your
monitoring or you pay to use a hosted SaaS cloud monitoring tool. Not only is
there a choice between these two deployment models, but there are now lots of
tools in each category.

The key difference is whether you want to manage your own monitoring, or whether
you want to pay someone to do it for you. Deciding whether you self-host or buy
hosted SaaS monitoring is the deciding factor about which tools are
appropriate - most tools are one or the other.

What are the pros and cons of hosted SaaS monitoring?

{{< framed-section-item--open classes="flat-lists pros-cons pros" >}}

{{< rich-title-5 icon="checkmark" id="pros-hosted" >}} Pros
{{</ rich-title-5 >}}

- **Let someone else deal with it.** Is monitoring part of your core business?
  If not, investing in your product is a better use of time and money. Let
  someone else deal with ensuring the monitoring is working, scaling, and under
  active development.
- **Keeping up with integrations.** One of the reasons we created Console is to
  help developers stay up to date with the high velocity of releases in the tech
  industry. There are always new software releases, new cloud services, new
  APIs. Keeping up to date is difficult, but when you pick your tech stack you
  want to be sure you can monitor it. The best monitoring products are always up
  to date with the latest releases and will integrate with new services as they
  are announced. Keeping self-hosted on-premises monitoring up to date is a
  challenge.
- **Saving engineering time.** Deploying hosted SaaS monitoring still needs time
  from your engineers but it is mostly integration work. These are specific to
  your environment rather than the undifferentiated heavy lifting of ensuring
  reliable alert delivery or managing a time series database. SaaS monitoring
  tools handle all that for you.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists pros-cons cons" >}}

{{< rich-title-5 icon="minus" id="cons-hosted" >}} Cons {{</ rich-title-5 >}}

- **Expensive licensing.** If you are operating at large scale, you probably
  have hundreds or thousands of servers, millions of metrics, and many TBs of
  logs. This makes SaaS monitoring very expensive because it is not free and
  open source, so the cost can be difficult to predict.
- **High network traffic egress.** Hosted SaaS monitoring is outside your
  network so you have to pay for all the outbound network traffic. At large
  scale you may be able to set up a peering or interconnection relationship but
  most of the time your monitoring traffic will egress over the public internet.
  This can become expensive.
- **Data protection.** The best SaaS server monitoring services have lots of
  certifications to ensure compliance with data protection regulations, but
  there is still a nervousness about sending sensitive monitoring data to third
  parties. In reality, most monitoring data is numerical and lacks the context
  needed to infer what's going on by itself, however there is the potential for
  accidentally leaking data into the monitoring environment. This is more
  relevant for log monitoring than server monitoring.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

### Best hosted SaaS server monitoring tools

{{< nav-wrapper--open id="wrapper-3" anchor-name="datadog" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="Datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadoghq.com/" score="5" >}}

Datadog is the industry leader with the most comprehensive and up to date set of
integrations, however this also means it has a more complex UI.

{{< youtube-video url="https://www.youtube.com/embed/YmJcbAI_OCg" title="Datadog Product Tour" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="$15-27 server/month" >}}

Datadog gets expensive very quickly. Server monitoring pricing ranges from
$15-27/server/month depending on features and monthly vs annual commitment.

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Integrations / plugins" score="5" >}}

Datadog has
[more than 450 integrations](https://www.datadoghq.com/product/platform/integrations/#all)
covering every tech stack, cloud products and open source. Plugins are kept up
to date by Datadog's engineering teams and new integrations will often be
launched on the day of release due to partnerships with major vendors. The agent
is open source so you can easily write your own plugins.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Graphs" score="5" >}}

Datadog uses its own query language to generate graphs so you can easily
customize what is displayed, or just pick from the UI. Various chart types are
supported and data can be visualized based on tags, aggregation functions,
metric attributes and time ranges. All graphs can be shared on dashboards or in
Datadog's built-in incident management product.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Alerts" score="5" >}}

Datadog has a powerful alert system based around different data sources. These
can be simple host or metric based triggers but Datadog also supports alerting
on anomalies, events, forecast behavior, outlier detection, process monitoring
and composites of all these types. Notifications are built into Datadog's team
collaboration features which can notify via email, Jira, PagerDuty, Slack,
webhooks and others.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

The deciding factor for any monitoring tool is whether it can monitor your tech
stack. Datadog excels here. It has the most up to date integrations across a
wide range of tools which means anything you want to monitor is supported.

Datadog can also ingest data from custom sources. This includes through
OpenMetrics endpoints, allowing you to connect to Prometheus, for example, as
well as using open standards like
[StatsD](https://docs.datadoghq.com/integrations/statsd/), SNMP, OpenTelemetry
and OpenTracing. However, these are considered “custom” metrics for billing
purposes and are limited to 100 per host before you have to pay more.
[These are complex](https://docs.datadoghq.com/account_management/billing/custom_metrics/)
and get expensive very quickly - pricing is only available by speaking to sales,
which is a bad sign. As an engineer this is always frustrating. I don't want to
have to request a quote or chat to sales to get a sense for how much a tool is
going to cost. Not listing a price probably means it's expensive.

Datadog has so much functionality that you really can standardize your
monitoring on it: servers, APIs, application performance monitoring, security,
logs, user experience monitoring. It can do everything.

Datadog is also highly customizable. This means you can create custom dashboards
with metrics visualized in context with events, logs, and CI/CD status, all tied
into a devops flow that includes runbooks, infrastructure notebooks and incident
management. Collaborating with your engineering, devops and security teams in a
single tool means you have access to all the data you need to maintain reliable
infrastructure and debug problems.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

All this customizability and flexibility across multiple monitoring products
means that Datadog is not easy to use. It is better than the previous generation
of tools like Nagios, but because the UI crams in so much functionality it can
be difficult to find what you're looking for. This is particularly the case if
you just need basic monitoring. For example, although the alerting functionality
is very sophisticated there is no top level concept of an alert - these exist as
“Monitors” and are dependent on the trigger source e.g. a server metric or
synthetic check status. This means it is flexible for large environments but is
cumbersome for smaller use cases.

Datadog is also very expensive. The free version is limited to 5 hosts and only
1 day of data retention, plus no alerting, custom metrics or support for
containers. Monitoring without alerting is not very useful. Costs escalate
quickly and unexpectedly, especially with usage based pricing on log monitoring
or custom metrics that you have limited control over. Datadog is not designed
for small environments that only need basic monitoring.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="new-relic" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="New Relic" thumbnail="/img/favicons/newrelic.com.png" url="https://newrelic.com/" score="4.5" >}}

New Relic is best known for application performance monitoring (APM) but can now
monitor everything, including server monitoring. It has a clean UI but has more
limited alerting capabilities.

{{< youtube-video url="https://www.youtube.com/embed/JQC-cMre5gI" title="Level Up Data Nerds" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="100GB free then $0.25 GB/month" >}}

New Relic has a reputation for being very expensive but it now includes a
generous free quota. A single user can get 100GB/month worth of ingested data
with 8 days of retention and unlimited alerting for free. Additional users start
at $99/user/month and extra data is $0.25/GB/month. This means you can try all
the features and monitor reasonably sized infrastructure for free. However, it
can be difficult to predict costs priced on a GB basis for server monitoring -
data volume depends on things like log volume, metrics reported, and reporting
frequency.

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Integrations / plugins" score="4.5" >}}

New Relic has [360+ integrations](https://newrelic.com/integrations) so
everything you might want to use is covered. Some of these are implemented
through the monitoring agent which has to be installed into your environment and
then automatically configures common integrations. Agentless monitoring is
available for cloud services such as AWS Lambda. Like Datadog, New Relic is
often one of the first monitoring companies to support new services and
regularly releases integrations on the day new products are announced.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Graphs" score="5" >}}

New Relic's graphs are based on their own
[NRQL](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/)
query language, a custom dialect of SQL. Being able to inspect the query for
each graph is a powerful feature because the query builder allows you to easily
customize what is visualized - different chart types, filters, limits, sorting
and aggregation functions. You can also use
[PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) instead,
which is a nice touch.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Alerts" score="4" >}}

Alerting in New Relic is based around “policies” that have trigger conditions. A
“Golden Signals” policy is auto-created on installing the monitoring agent which
sets up some basic email alerts on server CPU %. Trigger conditions are most
flexible if defined using NRQL but there are some templates provided for server
monitoring. You can attach runbooks to notifications and configure channels such
as email, PagerDuty, Slack and webhooks. Alerting is powerful, but not quite as
flexible as Datadog.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

The real power of New Relic comes from everything existing as a metric and
building their UI through its custom query language -
[NRQL](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/).
You can get along just by using the clean and easy to use UI (which supports
dark mode!) but NRQL is a powerful concept that allows you to query, manipulate,
analyze and visualize all of your monitoring data. Even your New Relic account
quota data can be queried and graphed.

Being able to use
[PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/)-style
queries instead of NRQL is a nice touch that makes it easy to work with both New
Relic and [Prometheus](https://prometheus.io). Indeed,
[New Relic can ingest metrics from Prometheus](https://docs.newrelic.com/docs/integrations/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic/)
and you can
[use New Relic as a data source for Grafana](https://docs.newrelic.com/docs/integrations/grafana-integrations/get-started/grafana-support-prometheus-promql/).
Other
[open source telemetry integrations](https://docs.newrelic.com/docs/integrations/open-source-telemetry-integrations/get-started/introduction-new-relics-open-source-telemetry-integrations/)
include OpenTelemetry, Istio and OpenCensus.

Deploying New Relic is easy and it automatically collects the basic data you
would expect from a server monitoring tool - CPU, memory, disk, etc. The agent
auto detects the environment. In our tests using Azure Virtual Machines, New
Relic automatically tagged the host configuration (e.g. hostname, CPU cores,
memory) and cloud environment (region, OS, Linux distribution, etc).

New Relic used to be known for being very expensive, particularly if you used
lots of its different monitoring products (server monitoring, APM, logs, traces,
synthetics, etc). Although out of scope of this review, the nice thing about
having a relatively high free quota (100GB per month) means you can try the
other monitoring features, like APM and log search. Now New Relic have switched
to a bundled model where all the products are included and priced on data volume
it is much easier to try out all the features and start pushing data in. This is
a clever sales trick!

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Although the power of NRQL is used for defining alert triggers, the notification
options are not as powerful as Datadog. You can define thresholds such as
deviation from baselines, outlier detection, aggregation windows, critical vs
warning thresholds and customized runbook or alert descriptions with variables.
These feed into notification channels such as email or Slack notifications but
are missing Datadog's advanced features like forecasting, composite metrics and
incident management.

The pricing model with a generous free quota means it's easy to deploy and try
all the features of New Relic, but it is more challenging to predict how much
data you need. 100GB/m sounds like a lot but can you intuitively estimate how
much data a monitoring agent on a single server would report each month? What
about if you then add APM, logs, and synthetic monitoring?

There are also some strange
[documented limits around how much data can be ingested at once](https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/new-relic-data-usage-limits-policies/).
With server monitoring this is limited to 5,000 agents per account and 5,000 new
containers per hour per account. You'd have to be operating at quite a large
scale to hit these, especially the container limits, but 5k servers is not as
high as you might think. Isn't the purpose of SaaS monitoring to be able to grow
without having to think about how to deal with scaling the infrastructure behind
it?

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="hosted-saas-also-considered" >}}

#### Also considered: Dynatrace, Logic Monitor + 2 more

These are the other hosted SaaS server monitoring services we tested. They are
not as highly rated as the two options above, but may be worth considering.

{{< tools/category-review/card-heading name="AppOptics" thumbnail="/img/favicons/www.appoptics.com.png" url="https://www.appoptics.com" score="2" >}}

AppOptics is part of the Solarwinds cloud monitoring suite and integrates into
their APM and log management tools. On the surface it has many of the same
features as Datadog and New Relic - integrations into cloud and open source
infrastructure software, configurable dashboards, and alerting on metrics with
thresholds based around trigger conditions and aggregations.

However, when you start using the product you discover that it lacks depth.
AppOptics is missing the same degree of flexibility as Datadog's alerting and
there is nothing similar to the power of New Relic's query language. All the
major integrations are there - they state 150+ on the website - but if you have
anything new or unusual in your stack it may not be supported.

With pricing ranging from $10-$13/server/month depending on annual or monthly
contract it's definitely cheaper, but if you're going to spend $10/server/month
then you may as well pay a bit more for Datadog or New Relic.

{{< tools/category-review/card-heading name="Dynatrace" thumbnail="/img/favicons/www.dynatrace.com.png" url="https://www.dynatrace.com" score="2" >}}

Dynatrace has been around in various forms since 2006, starting as an
application performance monitoring tool and then expanding to cover all aspects
of monitoring, now including server monitoring. It has a specific focus on full
stack “platform” monitoring which covers your entire infrastructure, from logs
to APM as well as code level analytics.

Dynatrace can do the job - the server monitoring agent installation went
smoothly and it reports the standard system metrics you would expect. However,
alert configuration is confusing - there is no “alerts” section in the main UI,
for example. Instead, Dynatrace uses “Problems” that are detected based around
anomalies, either from automated baselines or built in static thresholds.
Evaluation happens on sliding 5 or 15 minute time intervals. These are
configured in a separate “Settings” section of the UI which is an unsual
approach.

Unfortunately, Dynatrace has the most complicated pricing structure we've ever
seen. For example, although the Dynatrace website lists 400+ integrations,
[only 150 of those are agent integrations](https://www.dynatrace.com/hub/?tags=oa)
and these consume a billing metric called
[Davis Data Units](https://www.dynatrace.com/support/help/monitoring-consumption/davis-data-units/)
(DDU). Each data point consists of 0.001 DDUs but is weighted depending on the
amount of RAM a server has, with different weights depending on whether the
monitoring agent is in “Full Stack” or “Infrastructure Mode”. The former gets
1000 custom metrics per host and the latter gets 200 custom metrics, which don't
consume DDUs. Integrations into cloud APIs and serverless products also consume
DDUs.

The default Full Stack Monitoring mode pricing starts at $69/server/month or
$21/server/month for Infrastructure Monitoring mode for 8GB hosts. A free tier
of 200,000 DDUs is included which equates to 381 metrics collected at 1 minute
intervals, and the two different monitoring modes include a metric quota. It's
not clear how that relates to real-world monitoring, but you can buy top ups.
The documentation states DDUs are bought in groups of 1 million, but the pricing
page says $25/month for 100k DDUs (billed annually). It's unclear if alerting is
billable.

This makes it difficult to calculate how much monitoring a server would cost.
It's not clear why pricing is different for servers with more RAM and the
distinction between full stack and infrastructure mode is not intuitive.
$69/server/month is high relative to the competition.

Given the limited number of integrations, unusual approach to alerting, and
complex pricing, we do not recommend Dynatrace for server monitoring.

{{< tools/category-review/card-heading name="Logic Monitor" thumbnail="/img/favicons/www.logicmonitor.com.png" url="https://www.logicmonitor.com" score="none" >}}

Logic Monitor tricks you into thinking you are signing up for a trial but you
can't actually test the product without speaking to someone - you are actually
“requesting” a trial, not signing up. Coupling this with the fact that they do
not list their pricing anywhere makes for a frustrating experience for a
developer who just wants to try the product themselves.

[Our selection criteria](/about/#selection-criteria) require self-service signup
so we were unable to evaluate Logic Monitor.

{{< tools/category-review/card-heading name="Lightstep" thumbnail="/img/favicons/lightstep.com.png" url="https://lightstep.com/" score="none" >}}

Lightstep is designed primarily as a tracing tool that also supports
infrastructure metrics. It doesn't have its own monitoring agent so it requires
you to
[push data from one of several supported sources](https://docs.lightstep.com/docs/send-metrics-to-lightstep) -
Datadog, Prometheus, AWS, Google Cloud or OpenTelemetry. As such, we decided not
to review it as part of this article on server monitoring. It will be covered in
a future Console review of tracing and observability tools.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="self-hosted-monitoring-tools" >}}

### Self-hosted server monitoring tools

We reviewed 12 self-hosted server monitoring products. The best is:
[Grafana + Prometheus](#grafana-prometheus). We also like:
[InfluxDB + Telegraf](#influxdb-telegraf).

{{< framed-section--open classes="framed-section-default" >}}

#### Pros & cons of self-hosted on premises monitoring

Self-hosted monitoring is different from SaaS monitoring where everything is
done for you in a single product. Although there are all-in-one self-hosted
server monitoring tools, for the best setup you really need to deploy several
product and integrate them. This is more operationally challenging -
demonstrating the value of SaaS monitoring - but allows each tool to focus on
what it does best.

Once you have everything set up, running your own self-hosted monitoring means
you have more control, you can keep network egress costs low and you don't have
to pay monthly fees. However, you have to ensure your monitoring is reliable,
and scaling data storage as you collect more data is a difficult problem. Is
this really a good use of your engineering team?

What are the pros and cons of self-hosted on premises monitoring?

{{< framed-section-item--open classes="flat-lists pros-cons pros" >}}

{{< rich-title-5 icon="checkmark" id="pros-self-hosted" >}} Pros
{{</ rich-title-5 >}}

- **You have complete control.** You can choose which software you prefer, how
  it is deployed and integrated, how long you keep data for and where that data
  is stored. This last point is important in some regulated sectors where data
  cannot leave your environment and/or you need to control which countries data
  is stored in.
- **Traffic stays in your network.** You can manage the security of your
  monitoring by ensuring that monitoring data is only transmitted over specific
  network infrastructure such as a dedicated monitoring subnet, VPC, and/or
  encrypted links. It also means traffic remains internal - monitoring software
  can generate large volumes of network traffic, which can be costly if it has
  to egress your network to a hosted SaaS monitoring product.
- **No licensing costs.** Hosted SaaS monitoring is usually billed on a usage
  basis - per server, per GB of log storage or per metric. This starts out cheap
  but as you scale, monitoring can become a significant expense. For volume or
  metric based pricing this provides a negative incentive - the more you monitor
  the better the view you have of your infrastructure, but the more it costs.
  Running your own monitoring usually means using free, open source software
  although there are still some legacy on-premises enterprise monitoring
  products.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists pros-cons cons" >}}

{{< rich-title-5 icon="minus" id="cons-self-hosted" >}} Cons
{{</ rich-title-5 >}}

- **Monitoring your monitoring.** Deploying your own monitoring means you need
  to consider reliability, redundancy and backups. It's not very useful if your
  monitoring also goes down when production goes down! This means deploying in
  entirely separate infrastructure, setting up monitoring for your monitoring,
  and regularly testing things like whether alerts are being delivered.
- **Scaling time series is hard.** Storing time series data with high
  availability and low retrieval latency is a difficult problem. This is why
  hosted SaaS monitoring is more expensive the longer you want to retain your
  data - it's expensive to keep large volumes of data for fast querying. Running
  your own monitoring means you need to deal with storing everything.
- **Higher engineering costs.** You might not pay for a software license but you
  will pay for the engineering time to deploy and maintain the software. With
  modern monitoring tools focusing on a single component, you will have to
  install and maintain several separate tools e.g. Grafana for visualization and
  Prometheus for storing the time series data. Maintaining and scaling
  independent monitoring infrastructure is only a trivial problem if you've
  never done it before, especially at scale. Is this something you want to
  dedicate your engineering teams to?

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

### Best self-hosted server monitoring tools

{{< nav-wrapper--open id="wrapper-7" anchor-name="grafana-prometheus" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="Grafana + Prometheus" thumbnail="/img/favicons/grafana.com.png" url="https://grafana.com" score="4.3" >}}

Grafana is the best open source metrics visualization and dashboarding tool. It
can connect to various data source backends and has built-in alerting. We
recommend using the open source metrics backend,
[Prometheus](https://prometheus.io/), as the primary data source.

{{< youtube-video url="https://www.youtube.com/embed/0n2UNzk2OaI" title="Getting Started with Grafana Webinar" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Integrations / plugins" score="4" >}}

Metrics are first pushed into Prometheus which Grafana queries for generating
dashboards, graphs, and triggering alerts. This is achieved either through
instrumenting your code with one of the many
[client libraries](https://prometheus.io/docs/instrumenting/clientlibs/), or by
using the
[metric exporters](https://prometheus.io/docs/instrumenting/exporters/) for your
tech stack. Only 13 of these exporters - such as Consul, Memcached, MySQL,
HAProxy, and system metrics - are officially supported. All the others are
community built. Exporters are also run as a separate binary which you must
download, configure and run, but for simple server monitoring the officially
supported [node_exporter](https://github.com/prometheus/node_exporter) is easy
to get up and running. This may not be the case for all exporters. The quality
of unofficial third-party integrations is always a problem for any monitoring
product, especially as the integration becomes more obscure.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Graphs" score="5" >}}

It's in the name - Grafana has the most sophisticated and flexible graph builder
of all the tools we reviewed. Everything is based around visualization panels
which allow you to query data sources using their native query language -
[PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) in the
case of Prometheus, but it could be other source specific languages like SQL.
There are multiple graph types from histograms to dials and bar charts, you can
transform data through filters, joins, grouping and other aggregation functions,
and configure how the legend and labels are displayed. Grafana can even plot
metrics from different sources on the same graph and dashboards are built from
one or more panels.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Alerts" score="4" >}}

Grafana 8.0 introduced a new alerting mechanism where alerts are centralized
with a single system-wide alerting view, but it is still
[opt-in](https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/)
for early testing. In the meantime, Grafana's “legacy” alerts are configured
when creating a new graph panel for supported data sources. Not every data
source supports alerts. Alerts are triggered based on configured thresholds from
the data returned by queries. This gives you all the power of querying across
data sources with separate alert conditions set on averages, sums, and whether
the threshold is met across multiple series and custom time ranges. Grafana
supports multiple notification channels such as email, Slack, PagerDuty,
OpsGenie and webhooks.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

Grafana + Prometheus are the best free and open source server monitoring tools.
These two tools excel at their particular specialisms. Grafana is the most
powerful graphing and metric visualization tool available, and Prometheus is the
best time series backend.

The power of these tools is in their flexibility and customizability. Both have
an active developer community which means that you are likely to be able to
monitor your tech stack, or build a metric exporter yourself.

Prometheus exposes metrics through its own query language,
[PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/), which
means metrics from any source are easily accessible through a standardized
interface. Grafana connects to this to build dashboards and visualizations.
These can be as simple as a single time series or as sophisticated as
multiple-JOIN queries with aggregation functions over complex time ranges and
multiple series.

Grafana is going through a transition from its legacy alerts to the new
centralized system-wide mechanism introduced in Grafana 8.0. The new approach
makes it easier to define alerts across your infrastructure and manage them
independently of their visualization.

Another new feature in Grafana 8.0 is the ability to
[stream metrics in real time to the UI](https://grafana.com/docs/grafana/latest/live/live-feature-overview/).
This is achieved through a websocket connection so you can avoid page reloads.
This is useful for debugging issues as they are happening or monitoring live
changes to systems.

As Grafana and Prometheus both focus on specific tasks, you can swap them out
for something else.
[Grafana supports many different data sources](https://grafana.com/docs/grafana/latest/datasources/)
from AWS CloudWatch to MySQL and Microsoft SQL Server, all of which can be
enabled together. Equally, you can connect Prometheus to other visualization
tools such as
[its own basic metrics interface](https://prometheus.io/docs/visualization/browser/)
or SaaS tools like
[New Relic](https://docs.newrelic.com/docs/integrations/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic/)
and [Datadog](https://docs.datadoghq.com/integrations/prometheus/).

Using Grafana and Prometheus means you maintain control over your monitoring
infrastructure but if you decide it's too much hassle, there are hosted
providers. [Grafana Cloud](https://grafana.com/products/cloud/) is a commercial
SaaS version of Grafana + Prometheus, plus you get logging and tracing all in
one service.
[AWS also offers a managed Prometheus service](https://aws.amazon.com/prometheus/features/).

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

With flexibility comes complexity. Prometheus is not designed for long term
metrics storage and provides no durability guarantees because it runs on a
single node. This means you need to connect it to remote storage options such as
[Cortex](https://cortexmetrics.io/) or [Thanos](https://thanos.io/), both of
which are open source and provide horizontal scalability, high availability,
multi-tenancy and long term storage.

[arch screenshot]

Alerting is another thing you have to manage through the
[Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/)
component of the Prometheus project. This is deployed independently (ideally in
a high availability configuration) so that it can be connected to your
Prometheus instance. Alerts get configured against Alertmanager and are
evaluated based on the metrics going into Prometheus.

Using Alertmanager is fine if you standardize on Prometheus as the only data
source for your monitoring. However, if you have multiple Grafana data sources
you will be better using Grafana's built-in alerting. As of Grafana 8.0 this now
also supports Alertmanager (in alpha testing), unifying those components, but
you still need to configure notification mechanisms like providing it with an
SMTP server to send emails.

Although using Grafana's built-in alerting means one less tool to manage, it
only has limited
[support for high availability](https://grafana.com/docs/grafana/latest/administration/set-up-for-high-availability/) -
notifications are deduplicated if you use a load balancer to run multiple
Grafana instances, but there is no load distribution between servers. Similar
limitations exist for other features, such as
[live streaming metrics not being broadcast](https://grafana.com/docs/grafana/latest/live/live-ha-setup/)
to all users on all servers. Given how important it is for alerts to be
delivered, you may prefer to rely on Alertmanager at the cost of being able to
alert on multiple metric sources.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="influxdb-telegraf" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="InfluxDB + Telegraf" thumbnail="/img/favicons/www.influxdata.com.png" url="https://www.influxdata.com/products/influxdb/" score="4" >}}

InfluxDB is an open source time series database with a visualization and
alerting layer. It combines well with
[Telegraf](https://www.influxdata.com/time-series-platform/telegraf/), a
monitoring agent from the same developers, but the alerting features are
limited.

{{< youtube-video url="https://www.youtube.com/embed/GRDJpoiCKtg" title="Intro to InfluxDB & Telegraf" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Integrations / plugins" score="4.5" >}}

Data flows into InfluxDB through two sources - directly to your InfluxDB
instance via instrumenting your code, or via a plugin for the Telegraf
monitoring agent.
[Client libraries](https://docs.influxdata.com/influxdb/v2.0/tools/client-libraries/)
exist for all major programming languages like Java, Go, JS, Python and Ruby,
and there are 200+
[officially distributed Telegraf plugins](https://github.com/influxdata/telegraf/tree/master/plugins/inputs)
available for common tech stacks. The majority of these are officially supported
by the fact they're included in the official source repository for the Telegraf
agent. The agent is distributed as a single binary and is easy to install, with
plugins enabled and configured in the agent's config TOML file. This includes
monitoring cloud services, such as AWS Cloudwatch or Google Pub/Sub.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Graphs" score="4" >}}

InfluxDB is queried using [Flux](https://www.influxdata.com/products/flux/), a
data scripting language for analyzing time series data. You can execute queries
from a CLI or a web GUI. The GUI has a graph builder based on selecting metrics
as the graph series, aggregation functions such as mean, count and max, and
advanced customizations such as hover dimensions, interpolation, X and Y axis
options and time formats. This builds a Flux query behind the scenes which you
can edit to directly configure the executed query. InfluxDB does not have as
many graph types as Grafana but it supports the main choices you'd expect:
gauge, heatmap, scatter, table, etc.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Alerts" score="3" >}}

Alerting in InfluxDB is based around checks that define urgency levels - crit,
warn, info, ok. Checks can be triggered based on thresholds or “deadman”, which
is when a particular value is not being reported for a period of time.
Notification rules are set up to trigger when a check returns a particular
status, which then triggers a notification endpoint. Check conditions are
currently quite limited - you can only set thresholds such as “value is above
x”, although you can use the Flux query language to do more advanced
manipulation of metrics before they are evaluated by the check. Notification
endpoints only support Slack, HTTP, or Pagerduty but InfluxDB includes the
concept of
[scriptable tasks where you can query a check](https://docs.influxdata.com/influxdb/v2.0/monitor-alert/send-email/)
and then fire off an API request to something like SendGrid or AWS SES for email
notifications. Unfortunately, this is quite a hassle to manage. Instead, they
offer [Kapacitor](https://docs.influxdata.com/kapacitor/v1.5/), another open
source project from Influxdata specifically designed for importing time series
data from InfluxDB and triggering alerts. This has
[more integrations for notifications](https://docs.influxdata.com/kapacitor/v1.5/working/alerts/#list-of-handlers).

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

InfluxDB has a great installation and onboarding flow and the UI and color
choices really appeal as a developer! The UI is intuitive and it is easy to
build graphs using the data explorer. This hides a lot of the power of Flux, the
query and analysis language used to manipulate the time series data stored in
InfluxDB, but you can still access it when needed.

There are lots of nice touches. For example, the graphs include a simple UI
helper for quickly toggling the display timezone between UTC and local time
(running your infrastructure off UTC is the correct approach, but can make
debugging tricky across time zones!). Graphs are also customizable, whether that
is choosing a range of color options through to changing X-axis tick mark
intervals. A lot of thought has been put into the user experience but if you
prefer, everything is also
[available via a CLI](https://docs.influxdata.com/influxdb/v2.0/reference/cli/influx/).

The company behind InfluxDB also develops
[Telegraf](https://www.influxdata.com/time-series-platform/telegraf/), a
monitoring agent written in Go. Although InfluxDB can be used as a generic time
series database (which can also be a data source for Grafana), it is likely you
will want to collect metrics from your systems, databases, cloud services and
other components in your tech stack. That's what Telegraf is for.

The fact that the datastore, UI, and monitoring agent are from the same people
provides a level of polish and consistency that can sometimes be missing from
other projects. Combining InfluxDB + Telegraf gives you a powerful time series
datastore that can ingest metrics from an ecosystem of plugins and language
client libraries, all presented in a polished and good-looking web UI.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Alerting is the main limitation you will face if you use InfluxDB. Although
values are extracted through the sophisticated Flux query language, there are
[major limitations around check configurations](https://pqvst.com/2021/06/22/hosted-monitoring-evaluating-influx-and-grafana/)
unless you go through the hassle of setting up
[Kapacitor](https://docs.influxdata.com/kapacitor/v1.5/).

Kapacitor is a separate project that supports many more notification types and
has a powerful domain specific language (DSL) called
[TICKscript](https://docs.influxdata.com/kapacitor/v1.5/tick/introduction/)
which is used to extract, transform, and evaluate monitoring data. Kapacitor is
designed for more than just alerting - it is a full ETL system - so it is very
powerful, but it is another component that you need to manage. This can be
confusing given the built-in alerting functionality.

Another issue is that the open source version of InfluxDB only supports
deployment on a single server. If you need high availability with clustering
across multiple nodes and horizontal scalability then you need to purchase the
Enterprise version. Pricing is only available by contacting their sales team,
which is a red flag. There is an InfluxDB Cloud offering, available on
[AWS](https://aws.amazon.com/marketplace/pp/B08234JZPS/),
[Google Cloud](https://console.cloud.google.com/marketplace/details/influxdata-public/cloud2-gcp-marketplace-prod)
or
[Microsoft Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/influxdata.influxdb-cloud).
This is billed based on data transfer, storage and query count.

Even if you're happy with the alerting constraints, the inability to deploy a
reliable production monitoring setup without buying an enterprise version is a
major limitation.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-9" anchor-name="self-hosted-also-considered" >}}

#### Also considered: Nagios, Zabbix + 8 more

These are the other server monitoring tools we tested. They are not as highly
rated as the two options above, but may be worth considering.

{{< tools/category-review/card-heading name="checkmk" thumbnail="/img/favicons/checkmk.com.png" url="https://checkmk.com" score="none" >}}

checkmk is an unusual project because its free open source edition (checkmk Raw)
is based on Nagios but the other “Enterprise” editions (available in Free,
Standard and Managed Services variants) are unrelated to Nagios.

The Nagios-based Raw edition is in maintenance mode but does have an active
community around [plugins](https://exchange.checkmk.com/) and a
[discussion forum](https://forum.checkmk.com/). There is an upgrade path to the
Enterprise products for when you need a higher performance backend, high
availability, and/or technical support.

The main reason to use checkmk Raw is if you have decided to use Nagios (or
perhaps are already using it), but want extra functionality like a modern UI and
graphs. This scales up to a few hundred hosts but then starts to hit resource
limits (because of the Nagios core).

Checkmk enterprise has improved scalability and adds support for container
monitoring, high availability deployments, 1 second time series granularity and
more visualization options. The free version of the Enterprise edition supports
up to 25 hosts. Above that, it is priced based on the number of “services”
monitored - the average host will report 30 services. A license for 3000
services (~100 hosts) costs $720/year.

We did not evaluate Checkmk Enterprise because this section only covers open
source software. We don't recommend Checkmk Raw because it is based on Nagios
Core and is only receiving bug fix updates. There are more powerful options to
choose from.

{{< tools/category-review/card-heading name="Graphite" url="https://graphite.readthedocs.io/en/latest/" score="none" >}}

Graphite is a time series datastore that can generate graphs. It was originally
released in 2006 and open sourced in 2008. It's still in active development but
is focused on a very simple use case - storing and displaying monitoring data.
[It relies on third-party tools](https://graphite.readthedocs.io/en/latest/tools.html)
to get data in.

Graphite has its place, but doesn't compare to the other tools in this category.
If you have very simple requirements for graphical monitoring it will do the
job, but if you need more sophisticated visualizations or alerting then there
are better options.

{{< tools/category-review/card-heading name="Icinga" thumbnail="/img/favicons/icinga.com.png" url="https://icinga.com" score="1" >}}

Icinga was originally a fork of Nagios and continues to maintain compatibility.
It has a more modern UI but is not really on-par with the power of Grafana or
InfluxDB. It understands the concepts of cloud and containers but is still very
much host-based.

The biggest omission is the lack of any meaningful visualizations. It represents
data through single, static numbers and color associations such as red = bad. If
you think server monitoring should include graphs then Icinga isn't for you.

{{< tools/category-review/card-heading name="Nagios" thumbnail="/img/favicons/www.nagios.org.png" url="https://www.nagios.org/" score="1" >}}

Nagios is one of the oldest monitoring products around, having originally been
released in 2002. Its age shows, and although it is based around an open source
core it is really just a lead generation tool for the enterprise version -
Nagios XI. This is a UI on top of the Nagios Core backend.

Nagios comes from the era of individual servers that sit around for a long time.
It's architecture is based on a pull model where a central Nagios server
connects to agents running on each node, triggering a check cycle and then
returning the results. This model struggles in modern cloud environments where
instances are ephemeral, especially with containers.

Everything is defined in agent config files, including alerts, which limits the
flexibility if you need anything more than simple threshold-based monitoring. As
such, it's difficult to recommend Nagios for modern deployments given the
sophistication of the alternatives like Grafana, Prometheus and InfluxDB.

{{< tools/category-review/card-heading name="Netdata" thumbnail="/img/favicons/www.netdata.cloud.png" url="https://www.netdata.cloud" score="3" >}}

Netdata is an open source monitoring product that has an installable agent which
defaults to local storage of metrics on a single host. Users connect to the
monitoring UI running on each host, but it supports streaming data to a cloud UI
hosted by Netdata themselves. This is unusual because Netdata does not store any
metrics, instead pitching their cloud service as a “war room” that can be used
by multiple users for incident management. It is also provided free of charge,
with a paid service planned for the future.

Metrics are stored in-memory with the default configuration of around 2,000
metrics collected per second able to be stored for approximately 2 days (see the
[Netdata storage calculator](https://learn.netdata.cloud/docs/store/change-metrics-storage)).
If you want longer term storage, it integrates with
[a range of metrics database backends](https://learn.netdata.cloud/docs/export/external-databases),
such as Prometheus, AWS Kinesis, ElasticSearch, InfluxDB, New Relic and
PostgreSQL.

Alerts and notifications are configured in local config files per host, with
alarm status reported back to the UI. This means if you want to configure the
same alert on many hosts, you need to figure out how to distribute the config
files across them all.

Netdata is a good solution for a small number of nodes where you are only
interested in live streaming metrics, but can get complicated quickly as you
scale or if you need consistent alerting and want to store data for more than a
few days.

{{< tools/category-review/card-heading name="OpenTSDB" thumbnail="/img/favicons/opentsdb.net.png" url="http://opentsdb.net/" score="none" >}}

OpenTSDB is a time series database built on top of Hadoop and HBase. It's a good
option if you need to store a huge volume of time series data but it's not a
monitoring tool by itself.

Running HBase/Hadoop can also be a huge operational challenge, so if you are
interested in OpenTSDB then you may want to consider
[Google Cloud Bigtable which is compatible with the HBase API](https://cloud.google.com/bigtable/docs/hbase-bigtable).

{{< tools/category-review/card-heading name="Opstrace" thumbnail="/img/favicons/opstrace.com.png" url="https://opstrace.com/" score="none" >}}

Opstrace packages several open source monitoring tools
([Cortex](https://cortexmetrics.io), [Loki](https://grafana.com/oss/loki/),
[Grafana](https://grafana.com), [Prometheus](https://prometheus.io)) to make
deployment and management easier. This is still an early-stage project so we did
not evaluate it, and there are some limitations such as
[needing](https://opstrace.com/docs/references/faq#how-do-i-use-my-own-domain)
to use a \*.opstrace.io domain unless you contact them about a commercial
version. We'll reevaluate Opstrace in the future.

{{< tools/category-review/card-heading name="Sensu" thumbnail="/img/favicons/sensu.io.png" url="https://sensu.io" score="none" >}}

Sensu is an open source monitoring tool but it is only open source if you
[compile it from source code yourself](https://github.com/sensu/sensu-go), then
combine it with [the web UI project](https://github.com/sensu/web). This is not
obvious because when you download Sensu from their website, you are actually
downloading Sensu Go binaries - a commercial release. This is free for up to 100
hosts but then costs $3-5/host/month.
[The open source version is also missing features](https://sensu.io/features/compare)
such as dashboards and many third-party integrations.

This section only covers open source options so we did not evaluate Sensu Go.

{{< tools/category-review/card-heading name="SigNoz" thumbnail="/img/favicons/signoz.io.png" url="https://signoz.io" score="none" >}}

SigNoz is a metrics monitoring tool built around
[OpenTelemetry](https://opentelemetry.io/) that uses Clickhouse or Kafka + Druid
for its backend (you can choose which one you prefer). It is marketed as an open
source alternative to Datadog and New Relic, but currently doesn't come close to
their functionality. This is an interesting project to follow, but is still very
early in development and not on par with our main recommendations above.

{{< tools/category-review/card-heading name="Zabbix" thumbnail="/img/favicons/www.zabbix.com.png" url="https://www.zabbix.com" score="3" >}}

Zabbix is an monolithic monitoring tool written in PHP with Apache or Nginx as
the frontend and several options for the database backend (MySQL, PostgreSQL,
TimescaleDB, Oracle). It's actively developed and supported by a commercial
organization but remains an open source project anyone can install without any
limits.

Zabbix assumes you know what you're doing when it comes to managing the backend,
which means understanding how to properly deploy, secure and scale the database.
This includes deploying the database and web server components in a high
availability configuration, which
[you must manage yourself](https://blog.zabbix.com/zabbix-ha-cluster-setups/8264/).

Zabbix consists of several components, the main two being the Zabbix Server and
the monitoring agent installed onto each system you want to monitor.

Agents can either communicate with the server directly or they route through a
Zabbix Proxy that alleviates load on the server. This is because Zabbix comes
from the same world as Nagios where checks are actively polled. The server
contacts every agent and requests data, which then triggers the checks on each
monitored host. This is the opposite of the approach used by tools like Datadog
where each agent runs independently, posting data back to the central server.
The Zabbix Proxy sits in the middle, requesting checks from its connected agents
so that the Zabbix Server only needs to deal with a smaller number of Proxies.

Zabbix supports collecting data at 1 second granularity and has a range of
[built-in monitoring metrics](https://www.zabbix.com/documentation/current/manual/config/items/itemtypes/zabbix_agent),
which Zabbix calls "items". Using the newest version of the Zabbix agent brings
[built-in plugins](https://www.zabbix.com/documentation/current/manual/config/items/plugins#plugins_supplied_out-of-the-box)
written in Go for products like Ceph, MongoDB, MySQL, Docker and Redis. However,
these are limited in number so you need to rely on
[community plugins](https://share.zabbix.com/).

Alerting is configured through
[triggers](https://www.zabbix.com/documentation/5.0/manual/config/triggers/trigger)
and notifications, with expressions defining the alert conditions that send
notifications through email, SMS and web hooks.
[Examples are provided](https://www.zabbix.com/documentation/5.0/manual/config/notifications/media/webhook)
for common destinations like PagerDuty, Opsgenie, Slack and Microsoft Teams.
Zabbix's age shows when configuring SMS alerts because it assumes you have a GSM
modem connected via a serial port! You're probably better off using a webhook to
Twilio.

Zabbix is a powerful open source monitoring tool but it feels somewhat dated
compared to more modern options like Grafana and InfluxDB. We like its open
source philosophy and it covers most of what you would expect in a server
monitoring tool in 2021, but doesn't quite get our recommendation compared to
our two finalists above.

{{< div--close >}}

### FAQ

#### Lorem ipsum dolor sit amet, consectetur adipiscing?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet
sagittis augue, ac euismod dui auctor ut. Donec feugiat finibus sem, porta porta
sem congue in.

#### Lorem ipsum dolor sit amet?

Donec feugiat finibus sem, porta porta sem congue in. Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Maecenas feugiat facilisis rhoncus. Cras
lobortis ut purus vitae tempor. Nam quis eros eu tellus sollicitudin vulputate
vel eu sapien. Integer accumsan, mauris non blandit sagittis.

#### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut fermentum tellus. Quisque sit amet mollis?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet
sagittis augue, ac euismod dui auctor ut. Donec feugiat finibus sem, porta porta
sem congue in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
feugiat facilisis rhoncus. Cras lobortis ut purus vitae tempor. Nam quis eros eu
tellus sollicitudin vulputate vel eu sapien. Integer accumsan, mauris non
blandit sagittis.

### Related categories

{{< tools/category-review/related-categories >}}

{{< nav-wrapper--open id="wrapper-10" anchor-name="our-editorial-policy" >}}

{{< rich-title-3 icon="logo" id="our-editorial-policy" >}} Our editorial policy
{{</ rich-title-3 >}}

#### Why you can trust us

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet
sagittis augue, ac euismod dui auctor ut. Donec feugiat finibus sem, porta porta
sem congue in.

#### About Console

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet
sagittis augue, ac euismod dui auctor ut. Donec feugiat finibus sem, porta porta
sem congue in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
feugiat facilisis rhoncus. Cras lobortis ut purus vitae tempor. Nam quis eros eu
tellus sollicitudin vulputate vel eu sapien. Integer accumsan, mauris non
blandit sagittis.

#### How we make money

Donec feugiat finibus sem, porta porta sem congue in. Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Maecenas feugiat facilisis rhoncus. Cras
lobortis ut purus vitae tempor. Nam quis eros eu tellus sollicitudin vulputate
vel eu sapien. Integer accumsan, mauris non blandit sagittis.

{{< div--close >}}
